import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, Text, Pressable, TouchableHighlight } from 'react-native'
import ButtonDot from '../ButtonDot'
import Counter from '../Counter'

const GameButton = ({ index, value, updateValue }) => {
	const addRoll = () => updateValue(index, value + 1)

	const removeRoll = () => updateValue(index, value - 1)

	const [isPress, setIsPress] = React.useState(false)

	const touchPropsAdd = {
		activeOpacity: 1,
		underlayColor: 'dodgerblue',
		style: isPress ? styles.buttonPress : styles.button,
		onHideUnderlay: () => setIsPress(false),
		onShowUnderlay: () => setIsPress(true),
		onPress: addRoll,
		onLongPress: removeRoll,
	}

	const dots = []
	for (let i = 0; i < 6 - Math.abs(7 - parseInt(index + 2)); i++) {
		index != 5 && dots.push(<ButtonDot key={i} content={index + 2} />)
	}

	return (
		<View style={styles.container}>
			<View style={styles.button}>
				<View style={styles.count}>
					<Text style={styles.text}>{value}</Text>
				</View>
				<TouchableHighlight {...touchPropsAdd}>
					<View style={styles.buttonInner}>
						<Text
							style={[
								styles.text,
								{
									color: 1 == Math.abs(parseInt(index) - 7) ? '#f00' : '#fff',
								},
							]}>
							{index + 2}
						</Text>
						<View style={styles.dots}>{dots}</View>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: 100 / 12 + '%',
		aspectRatio: 1,
		padding: 2,
	},
	count: {
		position: 'absolute',
		bottom: '100%',
		left: 0,
		right: 0,
		textAlign: 'center',
		paddingBottom: 10,
	},
	button: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#fff',
		width: '100%',
		height: '100%',
		flex: 1,
		position: 'relative',
	},
	buttonUnpress: {
		borderColor: '#f00',
		backgroundColor: '#fff',
		color: '#000',
		width: '100%',
		height: '100%',
	},
	buttonPress: {
		borderColor: '#f00',
		backgroundColor: '#fff',
		color: '#000',
		width: '100%',
		height: '100%',
	},
	text: {
		fontSize: 24,
		color: '#fff',
		textAlign: 'center',
		flex: 1,
	},
	buttonInner: {
		flex: 1,
		justifyContent: 'space-between',
		// backgroundColor: 'dodgerblue',
		position: 'relative',
		// backgroundColor: 'orange',
	},
	dots: {
		flexDirection: 'row',
		paddingVertical: 5,
		justifyContent: 'center',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
	removePress: {
		paddingTop: 10,
	},
	remove: {},
})

export default GameButton
