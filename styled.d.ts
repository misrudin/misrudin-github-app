import 'styled-components'

interface Fonts {
	primary: string
	secondary: string
}

interface Colors {
	[index: string]: string
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: Colors
		fonts: Fonts
	}
}
