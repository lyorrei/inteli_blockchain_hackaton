const colors = {
    primary: '#FF324B',
    secondary: '#810096',

    greyLight1: '#faf9f9',
    greyLight2: '#f4f2f2',
    greyLight3: '#f0eeee',
    greyLight4: '#ccc',
    greyDark1: '#333',
    greyDark2: '#777',
    greyDark3: '#999',

    background: '',
    backgroundSecondary: '',
    text: '',
    textSecondary: ''
}

const sizes = {
    borderRadius: '1rem',
    lightBorderRadius: '3px'
}

const fontFamily = "'Montserrat', sans-serif"

export const lightTheme = {
    colors: {
        ...colors,
        background: '#fff',
        backgroundSecondary: '#333333',
        text: '#000',
        textSecondary: '#fff'
    },
    sizes,
    fontFamily
}

export const darkTheme = {
    colors: {
        ...colors,
        background: '#141414',
        backgroundSecondary: '#444444',
        text: '#fff',
        textSecondary: '#000'
    },
    sizes,
    fontFamily
}
