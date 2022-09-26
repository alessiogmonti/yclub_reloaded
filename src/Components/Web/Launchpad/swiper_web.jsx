import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {useSwipeable } from "react-swipeable"

import { Box,  Flex, Circle, Spacer, Heading} from "@chakra-ui/react"

import { Card } from "./card_web"

function WebSwiper(props) {
  const [position, positionSet] = useState(2)
  const handlers = useSwipeable({ 
      onSwipedLeft: () => position < props.data.length-1 ? positionSet(position+1) : null,
      onSwipedRight: () => position > 0 ? positionSet(position-1) : null })
  return (
    <div {...handlers} className="App">
      <div className="row">
        {props.data.map( (d,index) => (
            <motion.div className="container"
                initial={{scale: 0, rotation: -180}}
                animate={{rotate: 0,
                    scale: index === position ? 1 : 0.5,
                    left: `${(index - position) * 45 - 22.5}vw`}}
                transition={{type:'spring', stiffness:260, damping:20}}
            >
                <Card {...d}/>
            </motion.div>
        ))}
      </div>
      <Box position={'absolute'} bottom={'3%'}>
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
