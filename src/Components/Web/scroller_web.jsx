import "../Global/scrollerstyles.css";
import { motion } from "framer-motion";
import { Box, Center, Flex } from "@chakra-ui/react"
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
      className="card-container-web"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2, 
        margin: "-150px 0px -150px 0px",
        root: ref
     }}
    >
      <motion.div className="card-web" variants={cardVariants} key={contents.i} style={{overflow: 'visible'}}>
        {contents}
      </motion.div>
    </motion.div>
  );
})

export const Scroller = (props) => {
    const [expanded, setExpanded] = useState()
    const container = useRef(null)
    return (
    <Box>
      <Box width={props.width||'45vw'} p={'1%'} m={'1%'} mt={'0%'} height={'82vh'} position={'absolute'} left={-350} ref={container} style={{ overflowY: "scroll",overflowX:'visible' }}>
          {props.data.map((d, i) => (
            <Card contents={<Accordion i={i} data={d} expanded={expanded} setExpanded={setExpanded} />} key={i} ref={container} />)
          )}
      </Box>
    </Box>
    )
}