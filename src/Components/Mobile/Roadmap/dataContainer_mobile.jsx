
import {List, ListItem, ListIcon, Divider, Box} from "@chakra-ui/react"
import { AiOutlineCheckCircle, AiOutlineNodeIndex} from "react-icons/ai"

export const DataContainer = (props) => {
    return (
        <Box padding={'20px'} mt={'10px'} transformOrigin={'top center'}>
            {/* <Text style={{ whiteSpace: "pre-line", columnCount:2, columnRule: "2px double #ff00ff"}} variant={'main-link'} fontFamily={'Helvetica'} fontSize={'15px'} lineHeight={'24px'} > */}
                <List style={{ columnCount:2, columnRule: "1px solid white"}} spacing={2}>
                {props.data.map( (d) => (
                    <>
                    <ListItem>
                        {props.hasPassed ? <ListIcon as={AiOutlineCheckCircle} color={'accent'} /> : <ListIcon as={AiOutlineNodeIndex} color={'dark'} _dark={{color:'light'}} />}
                        {d}
                    </ListItem>
                    {d.length > 3 ? <Divider color={"#ff00ff"} /> : null}
                    </>
                ))}
                </List>
            {/* </Text> */}
        </Box>
    )
}