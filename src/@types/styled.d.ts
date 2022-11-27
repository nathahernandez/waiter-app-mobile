import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		FONT_FAMILY: {
			REGULAR: string;
			SEMI_BOLD: string;
			BOLD: string;
		},
		COLORS: {
			RED: string;
		}
	}
}
