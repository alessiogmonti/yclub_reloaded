import { Box, Heading, Flex, Center } from '@chakra-ui/react'

export const Hero = ({ title, subtitle, subwidth }: { title,subtitle, subwidth: string }) => (
  <Box height={'26%'} textAlign={'center'} mt={'55px'}>
    <Heading variant={'Landing'} color={'light'} fontFamily={'Space Grotesk'}>{title}</Heading>
    <Center>
    <Flex width={subwidth} mt={4} >
      <Heading variant={'SubLanding'} fontFamily={'Space Grotesk'}>{subtitle}</Heading>
    </Flex>
    </Center>
  </Box>
)

Hero.defaultProps = {
  title: 'YCLUB',
  subtitle: 'TOKEN SALE',
  subwidth: '100%'
}