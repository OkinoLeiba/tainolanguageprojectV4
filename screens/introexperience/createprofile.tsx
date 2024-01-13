import {
        View, 
        Image, 
        Text, 
        StyleSheet
    } from 'react-native';
import ProgressStep from '../../components/ProgressStep';
import StyledButton from '../../components/TLPButton';




export default function CreateProfile() {
  var userName = 'Text';
  return (
    <View style={styles.profileContainer}>
      <ProgressStep />
      <View style={styles.imageHeaderGroup}>
        <Image style={styles.image} source={require('../../assets/images/humming_bird.png')} />
        <View style={styles.textGroup}>
          <Text style={styles.groupHeader}>Welcome {userName}</Text>
          <Text style={styles.groupText}>Create a profile now to continue</Text>
          <Text style={styles.groupText}>learning Taíno!</Text>
        </View>
      </View>

      <View style={styles.buttonGroupContainer}>
        <View style={styles.buttonWrapper}>
          <StyledButton   
          title={'Create Account'}
          titleColor={'#fff'}
          titleSize={16}
          backgroundColor={'#355725'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => {}}
          icon={false}
          iconSource={''}
          iconName={''}
          iconStyle={undefined}
          buttonText={styles.buttonText}
          otherProps={styles.buttonNav} />
        </View>

        <View style={styles.optionDividerContainer}>
          <Image style={styles.line} source={require('../../assets/images/line148.png')} />
          <Text>or</Text>
          <Image style={styles.line} source={require('../../assets/images/line148.png')} />
        </View>

        <View style={styles.buttonStack}>
          <StyledButton   
          title={'Sigup with Google'}
          titleColor={'#1D1D1D'}
          titleSize={16}
          backgroundColor={'#DEDEDE'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => {}}
          icon={true}
          iconName={'google'}
          iconSource={require('../../assets/icons/icon_google.png')}
          iconStyle={styles.iconStyle}
          buttonText={styles.buttonText}
          otherProps={styles.buttonNavSocial} />
  
          <StyledButton   
          title={'Signup with Apple'}
          titleColor={'#1D1D1D'}
          titleSize={16}
          backgroundColor={'#DEDEDE'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => {}}
          icon={true}
          iconName={'superpowers'}
          iconSource={require('../../assets/icons/icon_apple.png')}
          iconStyle={styles.iconStyle}
          buttonText={styles.buttonTextStack}
          otherProps={styles.buttonNavSocial} />
        </View>
      </View>  
    </View>
  )
}



const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageHeaderGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 80,
  },
  image: {
    width: 88,
    height: 88,
  },
  textGroup: {
    gap: 0,
  },
  groupHeader: {
    color: '#212121',
    textAlign: 'center',
    /* Heading 1 */
    fontFamily: 'Inter',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 32,
    
    paddingBottom: 18,
  },
  groupText: {
    color: '#212121',
    textAlign: 'center',
    /* Body */
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28, /* 28px */
  },
  buttonGroupContainer: {

  },
  line: {

  },
  buttonWrapper: {
    display: 'flex',
    width: 'auto',
    paddingVertical: 24,
    paddingHorizontal: 32,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  buttonNav: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  buttonNavSocial: {
    display: 'flex',
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
  optionDividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  buttonStack: {
    display: 'flex',
    width: 'auto',
    paddingVertical: 48,
    paddingHorizontal: 24,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  buttonTextStack: {
    /* Button 2 */
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
  iconStyle: {
    // width: 4,
    // height: 4,
  },
})