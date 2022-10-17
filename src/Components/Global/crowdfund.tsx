import { Container } from '../Global/Container'
import MediaContainer from '../../Components/Global/MediaContainer'
import { CustomButton } from './customButton'
import { Info } from '../../Assets/Home/Icons/info'
import { Details } from '../../Components/Mobile/Menus/Home/CrowdfundDetails'
import { Divider, Box } from "@chakra-ui/react"

const mobilemedia = <div style={{position: 'relative', paddingTop: '177.77777777777777%'}}><iframe src="https://iframe.mediadelivery.net/embed/67633/a55f8375-940e-4fdd-91b6-c64ac272cf9a?autoplay=true&loop=false&muted=true" loading="lazy" style={{border: "none", position: "absolute", top: 0, height: "100%", width: "100%", borderRadius:'50px'}} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true}></iframe></div>
const webmedia = <div style={{position: 'relative', paddingTop:' 56.25%'}}><iframe src="https://iframe.mediadelivery.net/embed/67633/f4545a68-8fc0-4e36-867c-c424693644c4?autoplay=true&loop=false&muted=true" loading="lazy" style={{border: "none", position: "absolute", top: 0, height: "100%", width: "100%", borderRadius:'50px'}} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true}></iframe></div>

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
      <MediaContainer mobilemedia={mobilemedia} webmedia={webmedia}/>
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
