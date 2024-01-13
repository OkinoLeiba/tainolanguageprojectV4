/**
 * custom tex input for application
 * @param {string} value - input value or input data
 * @param {string} placeholder - placeholder value until it is fill with input text
 * @param {ColorValue} placeholderTextColor - placeholder color
 * @param {boolean} passwordIndicator - value used to indicate if input will be a password
 * @param {GestureResponderEvent} onPress - event handle of the gesture of pushing the button
 * @param {TextInputChangeEventData} onChangeText - text is passed as a single string argument to the callback handler when invoked
 * @param {KeyboardType} keyboardType - indicate and activate different type of keyboards
 * @param {boolean} secureTextEntry - obscures the text entered so that sensitive text like passwords stay secure
 * @param {boolean} eyeIcon - change whether text, password, is visible or not
 * @function
 */


import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  GestureResponderEvent,
  ColorValue,
  TextInputChangeEventData,
  KeyboardType,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type texinputprops = {
  value: string;
  placeholder?: string;
  placeholderTextColor: ColorValue;
  passwordIndicator: boolean;
  onPress?: GestureResponderEvent;
  onChangeText: TextInputChangeEventData;
  keyboardType: KeyboardType;
  secureTextEntry: boolean;
  eyeIcon: boolean;
};

export default function TLPTextInput(textInputProps: texinputprops) {
  const {
    value = textInputProps.value,
    placeholder = textInputProps.placeholder,
    placeholderTextColor = textInputProps.placeholderTextColor || '#AFAFA',
    passwordIndicator = textInputProps.passwordIndicator || false,
    onPress = textInputProps.onPress,
    onChangeText = textInputProps.onChangeText,
    keyboardType = textInputProps.keyboardType || 'default',
    secureTextEntry = textInputProps.secureTextEntry,
    eyeIcon = textInputProps.eyeIcon,
  } = textInputProps;

  const [focus, setFocus] = useState<boolean>(false);
  const [filled, setFilled] = useState<boolean>(false);

   // if(passwordIndicator) return setEyeIcon(true);

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        secureTextEntry={!eyeIcon ? secureTextEntry : !secureTextEntry}
        value={value}
        onBlur={() => setFocus(false)}
        // onChangeText={value => onChangeText(value)}
        onFocus={() => setFocus(true)}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
      />
      <View style={styles.textContainer} pointerEvents="none">
        <Text style={styles.placeholderText}>
          {placeholder}
        </Text>
      </View>
      <View>
      {passwordIndicator && (<Icon
          name={eyeIcon ? 'eye' : 'eye-off'}
          style={styles.eyeIcon}
          size={25}
          onPress={onPress}
        />)}
      </View>
    </View>
  );
}

TLPTextInput.defaultProps = {
  placeholder: 'placeholder',
  placeholderTextColor: '#AFAFA',
  passwordIndicator: false,
  keyboardType: 'default',
  secureTextEntry: false,
  eyeIcon: false
}


const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    
    display: 'flex',
    height: 64,
    // paddingTop: 10,
    // paddingRight: 10,
    // paddingBottom: 10,
    // paddingLeft: 16,
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',

    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#1D1D1D',
  },
  textContainer: {
    position: 'absolute',
    left: 10,
  },
  textInput: {
    fontSize: 20,
    width: '100%'
  },
  placeholderText: {
    fontSize: 10,
    fontWeight: '400',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
});


 

 

  
 
