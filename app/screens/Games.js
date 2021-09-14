import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StyledButton from '../components/StyledButton'
import { stateContext } from '../context/AppContext'

function Games(props) {
	const ctx = useContext(stateContext)
	const games = ctx.games
	console.log(games)
	return (
		<View style={styles.games}>
			<Text style={styles.report}>{games}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	games: {
		flex: 1,
		backgroundColor: '#000',
	},
	report: {
		color: '#fff'
	}

})

export default Games
