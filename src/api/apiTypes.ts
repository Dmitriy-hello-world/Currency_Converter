export interface ExchangeRatesResponse {
	rates: {
		USD: number
		EUR: number
		UAH: number
	}
}

export interface UseGetValueProps {
	setRates: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
