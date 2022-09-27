import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box,  Flex, Circle, Spacer, Heading} from "@chakra-ui/react"
import { ethers } from "ethers"

import { useSwipeable } from "react-swipeable"
import { Card } from "./card_web"

import SecondsToTime from '../../../Utils/Mint/secondsToTime';
import ContractsData from '../../../Data/contractsData';
// import Round from '../../../abi/Round'
// import RoundWithSigner from '../../../abi/RoundWithSigner'

function WebSwiper(props) {
  const [position, positionSet] = useState(2)
  const handlers = useSwipeable({ 
      onSwipedLeft: () => position < props.data.length-1 ? positionSet(position+1) : null,
      onSwipedRight: () => position > 0 ? positionSet(position-1) : null });

  const currentDate = Math.floor(+new Date() /1000)
  useEffect( ()=> {
    props.data.map( (d) => {
      currentDate < d.start ? (
        console.log('ok')
      ) : (
       null 
      )

      return null
      }
      // d.address ? (
      // ) : (
      // )
    )
  }, [])

  return (
    <div {...handlers} className="App">
      <div className="row">
        {props.data.map( (d,index) => (
            <motion.div className="container"
                initial={{scale: 0, rotation: -180, }}
                animate={{rotate: 0,
                    scale: index === position ? 1 : 0.5,
                    left: `${(index - position) * 45 - 20}vw`}}
                transition={{type:'spring', stiffness:260, damping:20}}
            >
                <Card {...d} date={currentDate}/>
            </motion.div>
        ))}
      </div>
      <Box className="navCircles" position={'absolute'} bottom={'3%'}>
            <Flex width={'100%'} gap={1} verticalAlign={'center'} justifyContent={'center'} align={'center'}>
            <Heading mr={5} variant={'special'} fontSize={'25px'} color={'light'}> view releases: </Heading>
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

export default WebSwiper;
