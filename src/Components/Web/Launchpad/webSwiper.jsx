import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box,  Flex, Circle, Spacer, Heading, VStack} from "@chakra-ui/react"

import { useSwipeable } from "react-swipeable"
import { Card } from "./card_web4"

function WebSwiper(props) {
  const [position, positionSet] = useState(1)
  const handlers = useSwipeable({ 
      onSwipedLeft: () => position < props.data.length-1 ? positionSet(position+1) : null,
      onSwipedRight: () => position > 0 ? positionSet(position-1) : null });

  return (
    <Box {...handlers} zIndex={6} position={'relative'} display={'flex'} justifyContent={'center'} height={'100vh'} width={'100%'} >
          <Box width={'100%'} display={'flex'} justifyContent={'center'} >
          <NavIndex length={props.data.length} position={position} positionSet={positionSet}/>
          {props.data.map( (d,index) => (
              <motion.div className="container" key={index}
                  initial={{scale: 0, rotation: -180, opacity:0}}
                  animate={{rotate: 0, opacity: 1,
                      scale: index === position ? 1 : 0.5,
                      left: `${(index - position) * 45 - 20}vw`}}
                  transition={{type:'spring', stiffness:260, damping:20}}
              >
                  <Card {...d}/>
              </motion.div>
          ))}
        </Box>
    </Box>
  );
}

const NavIndex = (props) => (
  <Box className="navCircles" transform={'rotate(90deg)'} transformOrigin={'center'} position={'absolute'} right={0} bottom={'50%'} height={'5%'} display={'block'} margin={'5px'} marginRight={'50px'} zIndex={5}>
    <Flex width={'100%'} gap={1} verticalAlign={'center'} justifyContent={'center'} align={'center'}>
      {/* <Heading mr={5} variant={'special'} fontSize={'25px'} lineHeight={'25px'} color={'light'}> view releases: </Heading> */}
      {[...Array(props.length)].map( (d, index) => (
          <>
          { props.position==index ? <Circle key={index+'_circleActive'} size={8} bg={'light'} borderColor={'accent'} borderWidth={'1px'}/> :
          <Circle key={index+'_circle'} onClick={() => props.positionSet(index)} size={5} bg={'dark'} borderColor={'light'} borderWidth={'1px'}/> }
          <Spacer key={index+'_spacer'} />
          </>
      ))}
    </Flex>
  </Box>
)

export default WebSwiper;
