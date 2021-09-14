import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Game from '../screens/Game'
import Games from '../screens/Games'

const screens = {
	Home: {
		screen: Home
	},
	Game: {
		screen: Game,
	},
	Games: {
		screen: Games,
	}
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
