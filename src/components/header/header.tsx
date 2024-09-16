import {
	AppBar,
	Box,
	CircularProgress,
	Toolbar,
	Typography,
} from '@mui/material'
import styles from './header.module.scss'
import { HeaderProps } from './types'

const Header = ({ rates, loading }: HeaderProps) => {
	return (
		<AppBar position='fixed' className={styles.headerContainer}>
			<Toolbar className={styles.toolbar}>
				<Typography variant='h6' component='div'>
					Currency Exchange Rates
				</Typography>

				{loading ? (
					<CircularProgress color='inherit' />
				) : (
					<Box display='flex' gap={2}>
						<Typography variant='body1'>
							1 USD = {rates.UAH.toFixed(2)} UAH
						</Typography>
						<Typography variant='body1'>
							1 EUR ={' '}
							{(rates.UAH / rates.USD / (rates.EUR / rates.USD)).toFixed(2)} UAH
						</Typography>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	)
}

export default Header
