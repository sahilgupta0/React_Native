import React, { use, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function App() {

	const [randColor, setRandColor] = useState("");

	const generateRandomColor = () => {
		let selector = 'ABCDEF123546'
		let rand = ""
		for(let i = 0; i<6; i++){
			rand += selector.charAt(Math.floor(Math.random() * 12))
		}
		setRandColor("#"+rand)
		console.log("The color code is : ",rand)
	}

	return (
		<View style={[styles.container,{backgroundColor:randColor}]}>
			<TouchableOpacity style={styles.button} onPress={generateRandomColor}>
				<Text>Click Me</Text>				
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({

	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white'
	},

	button:{
		fontSize:24,
		fontWeight:"bold",
		borderRadius:5,
		borderWidth : 3,
		borderColor:"red",
		height:30,
		backgroundColor:'white',
		alignItems:'center',
		justifyContent:'center',
		width:100,
	}

}
)


export default App;