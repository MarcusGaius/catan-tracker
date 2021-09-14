import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

const StyledButton = props => {
	const content = props.content
	const background = props.background
	const onPress = props.onPress

	return (
		<View style={styles.container}>
			<Pressable style={[styles.button, { backgroundColor: background }]} onPress={onPress}>
				<Text style={styles.text}>{content}</Text>
			</Pressable>
		</View>
	)
}

export default StyledButton
