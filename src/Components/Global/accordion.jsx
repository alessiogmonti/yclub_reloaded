import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, IconButton, Heading, Text, HStack, Spacer, Circle } from "@chakra-ui/react";
import { AiFillCloseCircle, AiFillDownCircle } from 'react-icons/ai'

export const Accordion = ({ i, data, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <Box layerStyle={'button'} borderRadius={'30px'} height={'100%'} overflow={'hidden'} display={'block'} position={'relative'} width={'100%'}>
      <HStack  px={3} py={4} mr={1}>
        <Heading variant={'Menu'} fontWeight={700} lineHeight={'24px'} fontSize={'24px'} > {data.title} </Heading>
        <Spacer />
        <Text variant={'main-link'} lineHeight={'14px'} fontSize={'15px'}> {data.date} </Text>
        {/* <Spacer /> */}
        <IconButton
          position={'relative'}
          right={0}          variant="outline"
          rounded="full"
          bg={'whiteAlpha.800'}
          color={'dark'}
          _dark = {{
              color:'accent',
              bg:'blackAlpha.800'
          }}
          fontSize={'35'}
          icon={isOpen ? <AiFillCloseCircle /> : <AiFillDownCircle />}
          onClick={() => setExpanded(isOpen ? false : i)}
          aria-label="Toggle Theme"
          colorScheme="blue"
        />
      </HStack>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {data.content}
          </motion.section>
        )}
      </AnimatePresence>
    </Box>
  );
};

export const Accordions = (props) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(1);

  return props.data.map((i, index) => (
    <Accordion i={index} expanded={expanded} setExpanded={setExpanded} />
  ));
};

// const accordionIds = [0, 1, 2, 3];