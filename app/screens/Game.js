import * as ScreenOrientation from 'expo-screen-orientation'
import React from 'react'
import { Button, SafeAreaView, StyleSheet, View } from 'react-native'
import GameButton from '../components/GameButton'

function Game({ navigation }) {
	ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)

	const reportScore = () => {
		let score = values.reduce((a, b, i) => {
			a[i + 2] = b
			return a
		}, {})
		alert('test')
		console.log(score)
		// navigation.navigate('Home')
	}

	const buttons = []
	const [values, setValues] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

	const updateValue = (index, value) => {
		setValues(
			values.map((e, i) => {
				return i == index ? value : e
			})
		)
	}

	for (let i = 0; i < 11; i++) {
		buttons.push(<GameButton key={i} index={i} updateValue={updateValue} value={values[i]} />)
	}

	return (
		<SafeAreaView style={styles.game}>
			<View style={styles.buttons}>{buttons}</View>
			<View>
				<Button title="Save and Exit" onPress={reportScore} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	game: {
		flex: 1,
		backgroundColor: '#000',
	},
	buttons: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
})

export default Game
