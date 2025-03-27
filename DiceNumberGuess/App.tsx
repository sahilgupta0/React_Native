import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const imageList: Record<number, ImageSourcePropType> = {
	1: require("./assets/1.png"),
	2: require("./assets/2.png"),
	3: require("./assets/3.png"),
	4: require("./assets/4.png"),
	5: require("./assets/5.png"),
	6: require("./assets/6.png"),
};




export default function App() {

	const [image, setImage] = useState<ImageSourcePropType>(imageList[1])

	function handleClick() {
		const al = Math.floor(Math.random() * 6) + 1
		setImage(imageList[al])
	}

	return (
		<View style={styles.container}>
			<View>
				<Image
					source={image}
					style={styles.image}
				/>
				<TouchableOpacity
					onPress={handleClick}
				>
					<View style={styles.button}>

						<Text
							style={styles.text}
						>Roll</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 100,
		width: 100,
		marginBottom: 30

	},
	button:{
	},
	text: {
		width: 100,
		borderWidth: 3,
		borderColor: 'red',
		borderRadius: 5,
		fontSize: 20,
		textAlign:'center',
		padding:4
	}
})