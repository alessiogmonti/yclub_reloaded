import "../Global/scrollerstyles.css";
import { motion } from "framer-motion";
import { Box, Center } from "@chakra-ui/react"
import { useRef, forwardRef, useState} from "react";
import { Accordion } from "../Global/accordion";

const cardVariants = {
  offscreen: {
    y: 20,
    scale: 0.5,
    opacity: 0.5
  },
  onscreen: {
    y: 100,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.4
    }
  }
};

const Card = forwardRef(({contents}, ref) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2, 
        margin: "-150px 0px -150px 0px",
        root: ref
     }}
    >
      <motion.div className="card" variants={cardVariants} key={contents.i} style={{overflow: 'scroll'}}>
        {contents}
      </motion.div>
    </motion.div>
  );
})

export const Scroller = (props) => {
    const [expanded, setExpanded] = useState()
    const container = useRef(null)
    return (
    <Center>
      <Box width={'100vw'} p={'1%'} m={'1%'} mt={'20%'} height={'82vh'} ref={container} style={{ overflow: "scroll" }}>
          {props.data.map((d, i) => (
            <Card contents={<Accordion i={i} data={d} expanded={expanded} setExpanded={setExpanded} />} key={i} ref={container} />)
          )}
      </Box>
    </Center>
    )
}