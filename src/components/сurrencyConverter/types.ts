export interface CurrencyState {
	amount1: number
	amount2: number
	currency1: string
	currency2: string
	rates: { [key: string]: number }
	loading: boolean
}

export interface CurrencyConverterProps {
	rates: { [key: string]: number }
	loading: boolean
}
