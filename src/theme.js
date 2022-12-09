import { extendTheme } from "native-base";

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light'
}

const colors = {
    primary: {
        50:'#f0e2ff',
        100:'#c37cfd',
        200:'#ad5bfe',
        300:'#9732ff',
        400:'#8e2ff7',
        500:'#852ce6',
        600:'#812bd6',
        700:'#7627cc',
        800:'#6823b4',
        900:'#5f20a4',
    },

}

export default extendTheme({colors, config})