/**
 * custom button for application
 * @param {string} title - title and identifier of button
 * @param {TextStyle.color} titleColor - color of title
 * @param {TextStyle.fontSize} titleSize - size of the title
 * @param {ColorValue} backgroundColor - background color of the button
 * @param {DimensionValue} width - width of button
 * @param {DimensionValue} height - height of button
 * @param {AccessibilityProps.accessibilityLabel} accessibilityLabel - accessibility label for screen reader
 * @param {GestureResponderEvent} onPress - event handle of the gesture of pushing the button
 * @param {any} icon - passing the icon to the button
 * @param {any} otherProps - any other style properties
 * @returns {JSX.Element}
 * @function
 */

import {FunctionComponent, useMemo} from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  GestureResponderEvent,
  DimensionValue,
  TextStyle,
  AccessibilityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {default as COLORS} from '../constants/Colors';
import { ColorValue } from 'react-native';
import { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import { IconButtonProps } from 'react-native-paper';


// materialUI
// https://reactnative.dev/docs/accessibility#accessibility-actions
// use Themed.tsx and StyledText.tsx text: if it will be the same throughout the program or override properties

// icon will need to be replaced with IconButtonProps or IconProps
// review and reconsider type for otherProps

type buttonprops = {
  title: string;
  titleColor?: TextStyle['color'];
  titleSize: TextStyle['fontSize'];
  backgroundColor?: ColorValue;
  width?: DimensionValue;
  height?: DimensionValue;
  accessibilityLabel: AccessibilityProps['accessibilityLabel'];
  onPress: ((event: GestureResponderEvent) => void) | null | undefined,
  buttonText: any,
  icon: boolean,
  iconName?: string,
  iconSource?: string,
  iconStyle?: any,
  otherProps: any
};

// onPress default should route to error message or default action or route to default screen?

// const buttonProps: buttonprops = {
//     title: '',
//     titleColor: '',
//     titleSize: 0,
//     backgroundColor: '',
//     width:'',
//     accessibilityLabel: '',
//     onPress: {},
// };





export default function StyledButton(buttonProps:buttonprops): JSX.Element {
  // const buttonProp = buttonProps;
  const {
    title = buttonProps.title,
    titleColor = buttonProps.titleColor,
    titleSize = buttonProps.titleSize,
    backgroundColor = buttonProps.backgroundColor,
    width = buttonProps.width,
    height= buttonProps.height,
    accessibilityLabel = buttonProps.accessibilityLabel,
    onPress = buttonProps.onPress,
    icon = buttonProps.icon,
    iconName = buttonProps.iconName,
    iconSource = buttonProps.iconSource,
    iconStyle = buttonProps.iconStyle,
    buttonText={...buttonProps.buttonText},
    otherProps = {...buttonProps.otherProps},
  } = buttonProps;

  // const props = useMemo((buttonProps: buttonprops) => { return { title: buttonProps.title,
  //     titleColor: buttonProps.titleColor,
  //     titleSize: buttonProps.titleSize,
  //     backgroundColor: buttonProps.backgroundColor,
  //     width: buttonProps.width,
  //     accessibilityLabel: buttonProps.accessibilityLabel,
  //     onPress: buttonProps.onPress }; });



  return (
    <View style={[styles.buttonContainer, {width: width, height: height, backgroundColor: backgroundColor}, otherProps]} >
      <TouchableOpacity>
        <Pressable
          onPress={onPress}>
          
            {/* {icon ? (
              <Icon.Button
                name={icon}
                onPress={onPress}
                style={styles.buttonIcon}
                
              />
            ) : null} */}
            {icon && <Icon
                name={iconName}
                onPress={onPress}
                iconStyle={iconStyle}
               
          
                
                
              /> }
            <Text 
              style={[{color: titleColor, fontSize: titleSize}, buttonText]}>
              {title}
            </Text>
          
        </Pressable>
      </TouchableOpacity>
    </View>
  );
}

{
  /* <Button title={title} color={backgroundColor}  /> */
}
// change based on style guide along with styles below 
StyledButton.defaultProps = {
  title: 'Button',
  titleColor: '#ffffff',
  titleSize: 14,
  backgroundColor: '#000000',
  width: 100,
  accessibilityLabel: 'button',
};

const styles = StyleSheet.create({
  buttonContainer: {

  },
  buttonIcon: {
   
  },
});

// buttonContainer: {
//     elevation: 8,
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 12
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//     alignSelf: "center",
//     textTransform: "uppercase"
//   }






