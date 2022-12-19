import { currencySymbolResolver } from './currencyOptions'

export const currencyResolver = ( price: number, currency: string) => {
	const symbol = currencySymbolResolver(currency)+' '
	const formated = symbol + price.toFixed(2).replace('.', ',')

	return formated
}
