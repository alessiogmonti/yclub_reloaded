import { Slide, Box } from '@chakra-ui/react'

export const Base = (props) => (
        <Slide direction={props.direction} in={props.toggle} style={{ zIndex: props.zVal }}>
          <Box
            layerStyle={'menu'}
            style={{zIndex: 5}}
          >
            {props.content}
          </Box>
        </Slide>
)