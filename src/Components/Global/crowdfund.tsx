import { Container } from '../Global/Container'
import MediaContainer from '../../Components/Global/MediaContainer'
import { CustomButton } from '../Global/button'
import { Info } from '../../Assets/Home/Icons/info'
import { Details } from '../../Components/Mobile/Menus/Home/CrowdfundDetails'
import { Divider, Box } from "@chakra-ui/react"

const iconStyle = {
  stroke: 'rgba(5,21,52,0.88)',
  strokeWidth: '0.25px',
  width: '57px',
  height: '57px',
  fill: 'white'
}

const Video = () => (
  <Box position={'relative'} display={'block'} height={'100vh'} mb={[null,null,null,null,null]}>
    <Container width="100%" position={'relative'} mx={[null]} direction={'column'} > 
      <MediaContainer />
      <Divider my={10} width={['50%']}/>
      <CustomButton 
        bg={'rgba(5,21,52,0.96)'}
        zVal={6} variant={'main-link'} accent_text={"DUBAI"} regular_text={"Q1 2023"} icon={<Info {...iconStyle} />}
        content={<Details />} />
      <Divider my={10} width={['50%']}/>
    </Container>
  </Box>
)

export default Video
