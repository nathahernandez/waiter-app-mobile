import styled from "styled-components/native";

export const Container = styled.View`
	flex-grow: 1;
	height: 73px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.TouchableOpacity`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ContainerIcon = styled.View`
	width: 44px;
	height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 75px;
	box-shadow: ${({ theme }) => theme.BOX_SHADOW.ICON};
	margin: 0px 0px 8px 0px;
`;
export const Icon = styled.Text`
	font-size: 24px;
`;
export const Text = styled.Text`
	font-family: ${({ theme }) => theme.TYPOGRAPHY.FAMILY._600};
	font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE.SM};
	color: ${({ theme }) => theme.COLORS.BLACK}
`;