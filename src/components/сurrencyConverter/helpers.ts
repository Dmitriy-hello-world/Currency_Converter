import { useCallback } from 'react'

export const convert = (
	amount: number,
	fromCurrency: string,
	toCurrency: string,
	rates: {
		[key: string]: number
	}
): string => {
	if (!rates) {
		return '0'
	}

	const USD_to_UAH = rates['UAH']
	const USD_to_EUR = rates['EUR']
	const EUR_to_USD = 1 / USD_to_EUR
	const UAH_to_USD = 1 / USD_to_UAH

	let res = 0

	if (fromCurrency === 'USD') {
		if (toCurrency === 'UAH') {
			res = amount * USD_to_UAH
		} else if (toCurrency === 'EUR') {
			res = amount * USD_to_EUR
		} else {
			res = amount
		}
	} else if (fromCurrency === 'UAH') {
		if (toCurrency === 'USD') {
			res = amount * UAH_to_USD
		} else if (toCurrency === 'EUR') {
			res = amount * UAH_to_USD * USD_to_EUR
		} else {
			res = amount
		}
	} else if (fromCurrency === 'EUR') {
		if (toCurrency === 'UAH') {
			res = amount * EUR_to_USD * USD_to_UAH
		} else if (toCurrency === 'USD') {
			res = amount * EUR_to_USD
		} else {
			res = amount
		}
	}

	return res.toFixed(2)
}

export const useAmoundChange = (rates: { [key: string]: number }) => {
	return useCallback(
		(value: string, fromCurrency: string, toCurrency: string) => {
			const convertedAmount = convert(
				Number(value),
				fromCurrency,
				toCurrency,
				rates
			)
			return convertedAmount
		},
		[rates]
	)
}
