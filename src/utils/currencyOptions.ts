const symbols = {
	brlSymbol: 'R$',
	usdSymbol: '$',
	euroSymbol: '€',
	yuanSymbol: '¥',
	rubleSymbol: '₽'
}
export const currencySymbolResolver = (name : string) => {
	switch(name) {
	case 'BRL':
		return symbols.brlSymbol
	case 'USD':
		return symbols.usdSymbol
	case 'RUB':
		return symbols.rubleSymbol
	case 'CNY':
		return symbols.yuanSymbol
	case 'EUR':
		return symbols.euroSymbol
	}
}