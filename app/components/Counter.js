import React from 'react'
import { StyleSheet, View } from 'react-native'

function Counter({ facing }) {
	return (
		<View
			style={[
				styles.container,
				{
					bottom: facing == 'plus' ? '100%' : null,
					paddingBottom: facing == 'plus' ? 10 : null,
					top: facing == 'minus' ? '100%' : null,
					paddingTop: facing == 'minus' ? 10 : null,
				},
			]}>
			<View
				style={[
					styles.counter,
					{
						borderBottomColor: facing == 'plus' ? '#fff' : null,
						borderTopColor: facing == 'minus' ? '#fff' : null,
					},
				]}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		aspectRatio: 1,
		padding: 2,
		// backgroundColor: '#a1a1a1',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
	},
	counter: {
		width: 40,
		height: 40,
		borderWidth: 20,
		// borderTopColor: '#fff',
	},
})

export default Counter
