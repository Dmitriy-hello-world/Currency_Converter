import { useCallback } from 'react'
import { ExchangeRatesResponse, UseGetValueProps } from './apiTypes'
import { apiPath } from './config'

export const useGetValue = ({ setRates, setLoading }: UseGetValueProps) => {
	return useCallback(async () => {
		try {
			const response = await fetch(apiPath)
			const data: ExchangeRatesResponse = await response.json()
			console.log(data)
			setRates({
				USD: data.rates.USD,
				EUR: data.rates.EUR,
				UAH: data.rates.UAH,
			})
			setLoading(false)
		} catch (error) {
			console.error('Error fetching exchange rates:', error)
		}
	}, [])
}
