const defaultTheme = {
    colors: {
        white: '#FAFAFA',
        dark: '#293341',
        medium: '#555555',
        light: '#8D99AE',
        primary: '#011627',
        secondary: '#EF476F',
        placeholder: '#a9a9a9'
    },
    fonts: {
        'primary': 'Roboto, sans-serif',
        'secondary': 'Nunito, sans-serif'
    },
}

export type ThemeType = typeof defaultTheme
export default defaultTheme