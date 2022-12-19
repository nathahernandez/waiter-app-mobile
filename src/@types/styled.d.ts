import 'styled-components'
import { TypographyProps, BoxShadowProps, ColorsProps } from '../utils/interfaces'

declare module 'styled-components' {
	export interface DefaultTheme {
		TYPOGRAPHY: TypographyProps;
		COLORS: ColorsProps;
		BOX_SHADOW: BoxShadowProps;
	}
}
