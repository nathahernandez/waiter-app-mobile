import { Container, Content, Text, Icon, ContainerIcon } from "./styles";
import { ViewProps } from "react-native";

interface CategoryProps extends ViewProps {
	categoryData: {
		_id: string;
		name: string;
		icon: string;
	}
}

export default function Category ({ categoryData }: CategoryProps) {
	const {icon, name} = categoryData;

	return (
		<Container>
			<Content>
				<ContainerIcon>
					<Icon>{icon}</Icon>
				</ContainerIcon>
				<Text>{name}</Text>
			</Content>
		</Container>
	);
}