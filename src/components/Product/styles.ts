import styled from "styled-components/native";

export const Container = styled.View`
	display: flex;
	flex-direction: row;
`;

export const ProductImg = styled.Image`
	height: 96px;
	border-radius: 8px;
`;

export const ProductInfo = styled.View`
	display: flex;
`;

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.TYPOGRAPHY.FAMILY._600};
	font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE.MD};
	margin: 0px 0px 8px 0px;
`;
export const Description = styled.Text`
	font-family: ${({ theme }) => theme.TYPOGRAPHY.FAMILY._400};
	font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE.SM};
	color: ${({ theme }) => theme.COLORS.GRAY};
`;
export const Price = styled.Text`
	font-family: ${({ theme }) => theme.TYPOGRAPHY.FAMILY._600};
	font-size: ${({ theme }) => theme.TYPOGRAPHY.SIZE.SM};
`;
