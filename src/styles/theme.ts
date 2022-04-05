import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            "900":"#181823",
            "800":"#1f2029",
            "700":"#353646",
            "600":"#484d63",
            "500":"#616480",
            "400":"#797d9a",
            "300":"#9699bb",
            "200":"#b3b5c6",
            "100":"#d1d2dc",
            "75":"#dadada",
            "50":"#eeeef2",
            "10": "#F5F8FA",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: '#F5F8FA',
                color: '#47585B',
            }
        }
    }
})