import { useEffect, useState } from 'react'
import { useGetValue } from '../../api/useGetValue'
import Header from '../header/header'
import CurrencyConverter from '../сurrencyConverter/сurrencyConverter'
import './App.scss'

function App() {
	const [rates, setRates] = useState<{ [key: string]: number }>({})
	const [loading, setLoading] = useState<boolean>(true)

	// custom hook that can get currency value from API and set it to state
	const fetchRates = useGetValue({ setRates, setLoading })

	// get currency value from API
	useEffect(() => {
		fetchRates()
	}, [fetchRates])

	return (
		<>
			<Header rates={rates} loading={loading} />
			<CurrencyConverter rates={rates} loading={loading} />
		</>
	)
}

export default App
