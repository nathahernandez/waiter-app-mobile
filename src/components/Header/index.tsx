import { Container, Minor, Normal, Strong } from "./styles";


export default function Header () {
	return (
		<Container>
			<Minor>
				Bem vindo(a) ao
			</Minor>

			<Strong>
				WAITER<Normal>APP</Normal>
			</Strong>
		</Container>
	);
}