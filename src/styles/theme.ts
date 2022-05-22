const defaultTheme = {
    colors: {
        white: '#F1F2F4',
        dark: '#293341',
        medium: '#555555',
        light: '#8D99AE',
        primary: '#42A5F5',
        secondary: '#EF476F',
        placeholder: '#6D7681',
        background: '#0C151D',
        darken: '#181F26',
        text: '#BAC0C4',
        bg_secondary: '#0a121a',
        border: '#222831'
    },
    fonts: {
        'primary': 'Roboto, sans-serif',
        'secondary': 'Nunito, sans-serif'
    },
}

export type ThemeType = typeof defaultTheme
export default defaultTheme