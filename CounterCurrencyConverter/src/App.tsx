import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import CurrencyButton from './component/CurrencyButton'
import { currencyByRupee } from './constant'




export default function App() {


	const [value, setValue] = useState(0)
	const [input, setInput] = useState('')
	const [isVisible , setIsVisible] = useState(false)

	const buttonPressed = (rate: number) => {
		if (input.trim() == "") {
			Alert.alert("Please Enter Amount")
		}
		const show = Number((rate * Number(input)).toFixed(2))
		setValue(show)
		setIsVisible(true)
	}

	const resetButton = () => {
		setIsVisible(false)
		setValue(0)
		setInput('')
	}

	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>

				{isVisible && <Text style={styles.hidden}>{value}</Text>}
				<TextInput 
					style={styles.input} 
					placeholder='Amount' 
					value={input}
					onChangeText={(text) => setInput(text)}
					keyboardType='number-pad'

				/>

			</View>
			<View style={styles.button}>
				<FlatList
					numColumns={3}
					data={currencyByRupee}
					keyExtractor={item => item.name}
					renderItem={({ item }) => {
						return (
							<Pressable
								onPress={() => buttonPressed(item.value)}
							>
								<CurrencyButton {...item} />


							</Pressable>
						)
					}}
				/>

				<Pressable onPress={resetButton} style={styles.reset}>
					<Text style={styles.resetText}>Reset</Text>
				</Pressable>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {

	},
	subContainer: {
		marginTop:15,
		alignItems:'center',
		marginBottom: 30
		

	},
	input: {
		padding: 10,
		borderRadius: 5,
		borderWidth:3,
		borderColor: '#616C6F',
		width:'50%',
		fontSize:20,

	},
	hidden: {
		fontSize: 30,
		fontWeight: 'bold',
		margin:10

	},
	button: {

	},
	reset:{
		marginTop:20,
		justifyContent:'center',
		alignItems:'center'
		
	},
	resetText:{
		borderWidth:3,
		borderColor:'#43BE31',
		backgroundColor:'yellow',
		borderRadius:5,
		fontSize:20,
		fontWeight:'bold',
		textAlign:'center',
		padding:4,
		paddingHorizontal:40,

		
	}



})