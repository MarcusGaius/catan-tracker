import React, { useContext } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import StyledButton from '../components/StyledButton'
import { stateContext } from '../context/AppContext'
import * as ScreenOrientation from 'expo-screen-orientation'

function Home({ navigation }) {
	ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
	const ctx = useContext(stateContext)
	return (
		<ImageBackground style={styles.background} source={require('../assets/background.webp')}>
			<View style={styles.home}>
				<StyledButton
					content={ctx.currentGame ? 'Back to Game' : 'New Game'}
					screen={'Game'}
					background={'dodgerblue'}
					onPress={() => {
						let game = ctx.currentGame ?? ctx.newGameHandler()
						navigation.navigate('Game')
					}}
				/>
				<StyledButton
					content={'Existing Games'}
					screen={'Games'}
					background={'dodgerblue'}
					onPress={() => navigation.navigate('Games')}
				/>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	home: {
		display: 'flex',
		paddingTop: 75,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1,
	},
})

export default Home
