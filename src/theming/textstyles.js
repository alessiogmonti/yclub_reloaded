import { mode } from "@chakra-ui/theme-tools"

export const Heading = {
    variants: {
        'Landing' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: ['80px', null, null, null, null],
            lineHeight: ['80px', null, null, null, null],
            letterSpacing: '-2%',
            textTransform: 'uppercase',
            color: mode( 'dark', 'light' ) (props)
        }),
        'WebLanding' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: [null,null, '120px', '150px', '180px'],
            lineHeight: [null,null, '120px', '150px', '180px'],
            letterSpacing: '-2%',
            textTransform: 'uppercase',
            color: 'light'
        }),
        'SubLanding' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'medium',
            fontSize: ['45px', null, null, null, null],
            lineHeight: ['55px', null, null, null, null],
            letterSpacing: '4%',
            textTransform: 'uppercase',
            color: 'light'
        }),
        'Menu' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'medium',
            fontSize: ['50px', null, null, null, null],
            lineHeight: ['55px', null, null, null, null],
            letterSpacing: '20%',
            textTransform: 'uppercase',
            color: mode( 'dark', 'light' ) (props)
        }),
        'SubMenu' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'regular',
            fontSize: ['40px', null, null, null, null],
            lineHeight: ['45px', null, null, null, null],
            letterSpacing: '20%',
            textTransform: 'none',
            color: mode( 'dark', 'light' ) (props)
        }),
        'SubText' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: ['20px', null, null, null, null],
            lineHeight: ['25px', null, null, null, null],
            letterSpacing: '20%',
            textTransform: 'none',
            color: 'light',
        }),
        'info' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: ['50px', null, null, null, null],
            lineHeight: ['55px', null, null, null, null],
            letterSpacing: '20%',
            textTransform: 'none',
            color: 'light',
        }),
        'special' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'regular',
            fontSize: ['60px', null, null, null, null],
            lineHeight: ['65px', null, null, null, null],
            letterSpacing: '20%',
            textTransform: 'none',
            bgGradient:'linear-gradient(92.55deg, #008AFF -19.47%, #FF3EFF 106.44%);',
            bgClip:"text"
        })
    }
}

export const Text = {
    variants: {
        'main-link' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: ['35px',null,null,null,null],
            lineHeight: '44px',
            color: mode( 'dark', 'light') (props)
        }),
        'buy-link' : (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: ['30px',null,null,null,null],
            lineHeight: '30px',
            color: mode( 'dark', 'light') (props)
        }),
        'info': (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'light',
            fontSize: ['33px',null,null,null,null],
            lineHeight: '38px',
            color: 'light'
        }),
        'webmenu': (props) => ({
            fontFamily: 'Space Grotesk',
            fontStyle: 'normal',
            fontWeight: 'light',
            fontSize: ['28px',null,null,null,null],
            lineHeight: '28px',
            color: mode( 'dark', 'light') (props)
        }),
    }
}