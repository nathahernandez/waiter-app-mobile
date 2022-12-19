import { Container } from './styles'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import Products from '../../components/Products'

export default function Home () {
	return(
		<Container>
			<Header />
			<Categories />
			<Products />
		</Container>
	)
}