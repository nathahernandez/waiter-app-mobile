import Category from "../Category";
import { Container } from "./styles";
import { categories } from "../../mocks/categories";


export default function Categories () {
	return (
		<Container>
			{ categories ? categories.map((category) => <Category key={category._id} categoryData={category} />) : null}
		</Container>
	);
}