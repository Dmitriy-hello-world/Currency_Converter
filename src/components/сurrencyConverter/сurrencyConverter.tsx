import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import InputSelectPair from '../inputSelectPair/inputSelectPair'
import { useAmoundChange } from './helpers'
import { CurrencyConverterProps } from './types'

const CurrencyConverter = ({ rates, loading }: CurrencyConverterProps) => {
	const [amount1, setAmount1] = useState<number>(1)
	const [amount2, setAmount2] = useState<number>(1)
	const [currency1, setCurrency1] = useState<string>('USD')
	const [currency2, setCurrency2] = useState<string>('USD')

	const handleAmountChange = useAmoundChange(rates)

	const handleAmount1Change = (value: string) => {
		const convertedAmount = handleAmountChange(value, currency1, currency2)
		setAmount1(Number(value))
		setAmount2(Number(convertedAmount))
	}

	const handleCurrency1Change = (value: string) => {
		const convertedAmount = handleAmountChange(
			amount1.toString(),
			value,
			currency2
		)
		setCurrency1(value)
		setAmount2(Number(convertedAmount))
	}

	const handleAmount2Change = (value: string) => {
		const convertedAmount = handleAmountChange(value, currency2, currency1)
		setAmount2(Number(value))
		setAmount1(Number(convertedAmount))
	}

	const handleCurrency2Change = (value: string) => {
		const convertedAmount = handleAmountChange(
			amount2.toString(),
			value,
			currency1
		)
		setCurrency2(value)
		setAmount1(Number(convertedAmount))
	}

	if (loading) {
		return <Typography variant='body1'>Loading exchange rates...</Typography>
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			alignItems='center'
			gap={4}
			mt={4}
			width='100%'
			maxWidth='500px'
			mx='auto'
		>
			<Typography variant='h5' component='h1'>
				Currency Converter
			</Typography>

			<InputSelectPair
				amount={amount1}
				currency={currency1}
				onAmountChange={handleAmount1Change}
				onCurrencyChange={handleCurrency1Change}
			/>

			<InputSelectPair
				amount={amount2}
				currency={currency2}
				onAmountChange={handleAmount2Change}
				onCurrencyChange={handleCurrency2Change}
			/>
		</Box>
	)
}

export default CurrencyConverter
