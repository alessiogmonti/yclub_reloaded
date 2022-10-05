import { mode } from "@chakra-ui/theme-tools"

export const BoxStyles = {
    'button' : {
        borderWidth: '1px',
        borderColor: 'white',
        rounded: '88px',
        bg: 'light',
        _dark: {
            bg: 'rgba(5,21,52,1)',
            borderColor: 'accent'
        },
        height: '59px',
        width: ['95vw','50vw'],
        // minWidth: 'max-content'
    },

    'background' : {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: -1,
        bgGradient: 'conic-gradient(from 184.76deg at 62% 26%, #2AABEE -1.08deg, #FF67F0 201.97deg, #2EA8EE 339.37deg, #2AABEE 358.92deg, #FF67F0 561.97deg);',
        _dark: {
            bgGradient: 'conic-gradient(from 192.37deg at 62% 26%, #051534 -20.63deg, #09768E 228.54deg,#051534 339.37deg, #09768E 588.54deg)'
        }
    },

    'menu' : {
        width: [null,'50%','40%','30%'],
        height: '100%',
        ml: [null, '50%','60%','70%'],
        color:'white',
        pt:'9',
        bg:'rgba(228,228,228,0.96)',
        _dark: {
            bg: 'rgba(5,21,52,0.94)'
        },
        rounded:'xl'
    },

    'cardFrame': {
        bg: 'rgba(228,228,228,0.99)', 
        _dark: {
            bg:'dark'
        },
        borderColor:'accent',
        borderWidth: '1px',
        borderRadius: '10%',
    }
}