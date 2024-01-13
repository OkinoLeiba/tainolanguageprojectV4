/**
 * modal to find feedback to user
 * @param {object} prop - containing boolean value to determine text
 * @returns {JSX.Element}
 * @function
 */
import {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


type resultprops = {textValue: boolean}

export default function Result(resultProps: resultprops): JSX.Element {

  const {
    textValue = resultProps.textValue,
  } = resultProps;


  const [text, setText] = useState<boolean>(true);

  return (
    <View style={[styles.resultContainer, {backgroundColor: textValue ? '#E1F5D7' : '#F0D2D3'}]}>
      <View style={styles.textGroup}>
        <Image style={styles.icon} source={textValue ? require('../assets/images/check_circle_light.png') : require('../assets/images/cancel_light.png')} />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{textValue ? 'Amazing!' : 'Oops!'} </Text>
        </View>
      </View>
    </View>
    )
}



const styles = StyleSheet.create({
  resultContainer: {
    position: 'absolute',
    bottom: 0,
    width: 390,
    height: 188,
    flexShrink: 0,
    // backgroundColor: '#828282',

  },
  textGroup: {
    display: 'flex',
    height: 32,
    flexShrink: 0,
    flexDirection: 'row',
    paddingTop: 32,
    paddingRight: 48,
    paddingBottom: 0,
    paddingLeft: 48,
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 32,
    height: 32,
    flexShrink: 0,
    right: 0,
  },
  textWrapper: {
    display: 'flex',
    width: 128,
    height: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
  },
  // imageWrapper: {
  //   right: -72,
  //   // paddingLeft: 40,
  // },
  text: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 10, /* 208.333% */
  },
})


 
// <View style={styles.imageWrapper}>
  // <Image style={styles.icon} source={require('../assets/images/ios_share.png')} />
// </View>







