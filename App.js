import React from 'react'
import Navigator from './app/routes/homeStack'
import Home from './app/screens/Home'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { stateContext } from './app/context/AppContext'

const { Provider } = stateContext

export default function App() {
	const [currentGame, setCurrentGame] = React.useState(null)
	const [games, setGames] = React.useState([])

	const newGame = () => {
		setCurrentGame({
			id: Date.now(),
		})
		return currentGame
	}

	const updateGame = game => {
		setCurrentGame({
			id: game.id,
			winner: game.winner,
			rolls: game.scores,
		})
		updateGames(currentGame)
	}

	const updateGames = report => {
		AsyncStorage.setItem(games.push(report))
	}

	useEffect(() => {
		AsyncStorage.getItem('mg-catan-games')
			.then(games => setGames(games || []))
	}, [])

	// return <Navigator />
	return (
		<Provider
			value={{
				games: games,
				currentGame: currentGame,
				newGameHandler: newGame,
				updateGameHandler: updateGame,
			}}>
			<Navigator />
		</Provider>
	)
}
