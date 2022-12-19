import { Container, ProductImg, ProductInfo, Description, Name, Price } from './styles'
import Image from '../../assets/img.png'

export default function Product () {
	return(
		<Container>

			<ProductImg source={Image} />

			<ProductInfo>
				<Name>
						Quatro Queijos
				</Name>
				<Description>
						Pizza de Quatro Queijos com borda tradicional
				</Description>
				<Price>
						R$ 40,00
				</Price>
			</ProductInfo>

		</Container>
	)
}