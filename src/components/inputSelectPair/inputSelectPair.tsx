import { Box, MenuItem, TextField } from '@mui/material'
import { InputSelectPairProps } from './types'

const InputSelectPair = ({
	amount,
	currency,
	onAmountChange,
	onCurrencyChange,
}: InputSelectPairProps) => {
	return (
		<Box display='flex' alignItems='center' gap={2}>
			<TextField
				label='Amount'
				type='number'
				value={amount}
				onChange={e => onAmountChange(e.target.value)}
			/>
			<TextField
				select
				label='Currency'
				value={currency}
				onChange={e => onCurrencyChange(e.target.value)}
				style={{ width: '100px' }}
			>
				<MenuItem value='USD'>USD</MenuItem>
				<MenuItem value='EUR'>EUR</MenuItem>
				<MenuItem value='UAH'>UAH</MenuItem>
			</TextField>
		</Box>
	)
}

export default InputSelectPair
