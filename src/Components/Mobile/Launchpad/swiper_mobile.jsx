import "./swiper_mobile.css"
import { Card } from "./card_mobile"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {useSwipeable } from "react-swipeable"
import { Box,  Flex, Circle, Spacer} from "@chakra-ui/react"

import Round from '../../../abi/Round'

export function Swiper(props) {
  const [position, positionSet] = useState(1)
  const handlers = useSwipeable({ 
      onSwipedLeft: () => position < props.data.length-1 ? positionSet(position+1) : null,
      onSwipedRight: () => position > 0 ? positionSet(position-1) : null })
  
  const currentDate = Math.floor(new Date() /1000)
  const [supply, setSupply] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect( ()=> {
    props.data.map( (d) => {
      currentDate < d.start ? (
        d['status'] = 'COMING SOON'
      ) : ( currentDate > d.end ? d['status'] = 'SOLD OUT' : null )
      
      if (currentDate > d.start && currentDate < d.end){
        d['countdown'] = true; 
        const round = Round(d.address);
        (async () => {
          try {
            const supply = (await round.roundTotalSupply()).toNumber() 
            setSupply(supply)
            d['stock'] = supply
          } catch (error){
            console.log(error);
          } finally {
            setLoading(false);
          }
        })()
        d['stock_pct'] = ( d['stock'] / d.stock_amt) * 100
        d['loading'] = loading
      }
    })
  }, [loading, supply])
  return (
    <div {...handlers} className="MobileApp">
      <div className="MobileRow">
        {props.data.map( (d,index) => (
            <motion.div className="MobileContainer"
                initial={{scale: 0, rotation: -180}}
                animate={{rotate: 0,
                    scale: index === position ? 1 : 0.5,
                    left: `${(index - position) * 90 - 45}vw`}}
                transition={{type:'spring', stiffness:260, damping:20}}>
                <Card {...d}/>
            </motion.div>
        ))}
      </div>
      <Box position={'absolute'} bottom={'25%'}>
            <Flex width={'100%'} gap={1} verticalAlign={'center'} justifyContent={'center'} align={'center'}>
            {[...Array(props.data.length)].map( (d, index) => (
                <>
                { position==index ? <Circle size={8} bg={'light'} borderColor={'accent'} borderWidth={'1px'}/> :
                <Circle key={index} onClick={() => positionSet(index)} size={5} bg={'dark'} borderColor={'light'} borderWidth={'1px'}/> }
                <Spacer />
                </>
            ))}
            </Flex>
        </Box>
    </div>
  );
}