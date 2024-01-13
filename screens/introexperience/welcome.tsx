/**
 * first Initial onboarding screen after splashscreen
 * @returns {JSX.Element}
 * @function
 */
import {Text,  
        StyleSheet, 
        View, 
        Image,
        FlexStyle} from 'react-native';
import {useState} from 'react';
import GLOBALSTYLES from '../../constants/GlobalStyles';
import StyledButton from '../../components/TLPButton';
import ProgressStep from '../../components/ProgressStep';



type displayflex = FlexStyle['display'];




export default function Welcome({navigation}): JSX.Element {

  const [displayFlex, setDisplayFlex] = useState<string>('flex');
  const [displayNone, setDisplayNone] = useState<string>('none');

  const [introText, setIntroText] = useState<boolean>(true);

  // const onPress = () => setIntroText(false); 

  // const onPress = () => setIntroText(!true); 
  const icon = false;

  
  const navOption = () => {
    if(displayNone==='flex' && introText) {
      setIntroText(false)
    }
    else {
      navigation.navigate('OnboardIntro')
    }
  }

  setTimeout(() => setDisplayFlex('none'), 5000);
  setTimeout(() => setDisplayNone('flex'), 5000);


  return (
    <View style={[GLOBALSTYLES.CONTAINER, {backgroundColor: displayFlex==='flex' ?  '#E1F5D7' : '#fff'}]}>
     <View style={[styles.progressWrapper, {display:displayNone as displayflex}]}>
        {!introText && <ProgressStep onPress={() => setIntroText(true)} />  }
     </View>

    <View style={[styles.imageWrapper, styles.image, {paddingTop: !introText ? 57 : 84}]}>
      <Image source={require('../../assets/images/humming_bird.png')} />
    </View>

    <View style={[styles.welcomeTextWrapper, {display:displayFlex as displayflex}]}>
      <Text style={styles.welcomeText}>
        Mabríka! 
      </Text>
      <Text style={styles.welcomeText}>
        Welcome to Learn Taíno! 
      </Text>
    </View>

    <View style={styles.introTextContainer}>
      <View style={[styles.introTextWrapper, {display:displayNone as displayflex}]} >
        {introText ?
        <Text style={styles.introText}>
        Whether you are looking to reconnect with your Taíno ancestry or are curious about Taíno culture, I welcome you to join me here at learn Taíno!
        </Text> 
        :
        <Text style={styles.introText}>
        Before we start our Taíno learning journey, let’s take a moment to learn about the history of the Taíno language.
        </Text>}
      </View>
    </View>  

    <View style={[GLOBALSTYLES.BUTTON_WRAPPER, {display:displayNone as displayflex}]}>
      <StyledButton   
      title={introText ? 'Let’s get started!' : 'Continue'}
      titleColor={'#fff'}
      titleSize={16}
      backgroundColor={'#355725'}
      width= {294}
      height={48}
      accessibilityLabel={'Button'}
      onPress= {() => navOption()}
      icon={false}
      iconName={''}
      iconSource={''}
      iconStyle={undefined}
      buttonText={GLOBALSTYLES.BUTTON_TEXT}
      otherProps={GLOBALSTYLES.BUTTON_NAV} />
    </View>
      
    </View>
  );


}

    // title={'Continue'}
    // titleColor={'#101828'}
    // titleSize={30}
    // backgroundColor={'#475467'}
    // width= {390}
    // accessibilityLabel={'Button'}

    // {title:'Continue', titleColor:'#101828', titleSize:30, backgroundColor:'#475467', width:390, accessibilityLabel:'Button'}


 
const styles = StyleSheet.create({
  progressWrapper: {
    top: 0,
  },
  imageWrapper: {
    display: 'flex',
    // paddingTop: 192,
    paddingLeft: 80,
    paddingBottom: 244,
    paddingRight: 80,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    
  },
  image: {
      width: 133.598,
      height: 128,
    
  },
  welcomeTextWrapper: {
    flexDirection: 'column',
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: 'center',

    gap: 0,
    flex: 1,
    alignSelf: 'stretch',
  },
  welcomeText: {
    color:  '#355725',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 46, /* 122.222% */
    letterSpacing: -0.72,
  },
  introTextContainer: {
    display: 'flex',
    width: 'auto',
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  introTextWrapper: {
    display: 'flex',
    backgroundColor: '#DEDEDE',
    width: 326,
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    borderRadius: 16,
   

    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'center',


  },
  introText: {
    color: '#475467',
    /* Text lg/Regular */
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28, /* 155.556% */
  },  

});




  



      

    
