import styled from 'styled-components/native'

export const ViewContainer = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(props => ({
	color: props.theme.COLORS.RED,
	size: 32
}))``