import React from 'react'
import { StyleSheet, View } from 'react-native'

function ButtonDot({ content }) {
	return (
		<View
			style={[
				styles.dot,
				{
					borderColor: 1 == Math.abs(parseInt(content) - 7) ? '#f00' : '#fff',
					backgroundColor: 1 == Math.abs(parseInt(content) - 7) ? '#f00' : '#fff',
				},
			]}></View>
	)
}

const styles = StyleSheet.create({
	dot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		borderWidth: 1,
		marginHorizontal: 1,
	},
})

export default ButtonDot
