import styled from "styled-components/native";

export const Container = styled.View`
	width: 155px;
	height: 54px;
	display: flex;
	gap: 4px;
	background-color: white;
`;

export const Minor = styled.Text`
	font-family: ${({ theme }) => theme.TYPOGRAPHY.FAMILY._400};
	font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE.SM};
	color: ${({ theme }) => theme.COLORS.BLACK};
	opacity: 0.9;

`;

export const Strong = styled.Text`
	font-family: ${({ theme }) => theme.TYPOGRAPHY.FAMILY._600};
	font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE.XL};
	color: ${({ theme }) => theme.COLORS.BLACK};

`;

export const Normal = styled.Text`
	font-family: ${({ theme }) => theme.TYPOGRAPHY.FAMILY._400};
	font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE.XL};
`;