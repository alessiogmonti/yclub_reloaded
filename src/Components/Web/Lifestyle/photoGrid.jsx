import { Grid, GridItem } from "@chakra-ui/react"


export const PhotoGrid = () => {
    return (
        <Grid 
                gridArea={(`
                            'area1 area1 area2 area2 area3'
                            'area1 area1 area4 area5 area6'
                            `)}
                templateColumns='repeat(5, 1fr)'
                templateRows='repeact(2, 1fr)' >
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
            <GridItem>
                <Box bg={'green'} borderColor={'purple'} borderWidth={1}/>
            </GridItem>
        </Grid>
    )
}