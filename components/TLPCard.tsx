import { 
		View, 
		Image, 
		StyleSheet, 
		ColorValue, 
		GestureResponderEvent } from "react-native";
import { GestureHandlerGestureEvent } from "react-native-gesture-handler";
import { Card, Text } from "react-native-paper";
import GlobalStyles from "../constants/GlobalStyles";

type cardprops = {
	image?: string,
	text: string,
	backgroundColor?: ColorValue,
	onPress: ((event: GestureResponderEvent) => void) | undefined,
	cardStyle?: string 
};

// use Themed.tsx and StyledText.tsx text: if it will be the same throughout the program or override properties
export default function CardTemplate(cardProps: cardprops) {
	const {
		image = cardProps.image, 
		text = cardProps.text,
		backgroundColor = cardProps.backgroundColor,
		onPress = cardProps.onPress,
		cardStyle = cardProps.cardStyle,
	} = cardProps;

	const {
		
	} = cardProps;

	return (
		<Card style={[styles.container, {backgroundColor: backgroundColor ? backgroundColor : '#DEDEDE'}]} onPress={onPress}>
		<Card.Actions>
		<Card.Content style={styles.cardContainer}>
	
		  <Card.Cover style={styles.cardLogo} source={require('../assets/images/snack-icon.png')} />
		  <Text variant="titleSmall" style={GlobalStyles.CARD_TEXT}>{text}</Text>
		 
		  </Card.Content>
		</Card.Actions>
	  </Card>
	);


};


const styles = StyleSheet.create({
	container: {
		height: 'auto',
		width: 'auto',
		borderRadius: 24,
		// backgroundColor: '#DEDEDE',
		overflow: 'hidden',
		display: 'flex',

	//   paddingTop: 24,
	//   paddingRight: 0,
	//   paddingBottom: 16,
	//   paddingLeft: 0,

		paddingHorizontal: 0,
		paddingVertical: 8,
		
		flexDirection: 'column',
		alignItems: 'center',
	}, 
	cardContainer: {
		alignItems: 'center',
		gap: 8,
		
	}, 
	cardLogo: {
		height: 30,
		width: 30,  
	},
  });