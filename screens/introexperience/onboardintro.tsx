/**
 * first welcoming screen 
 * @returns {JSX.Element}
 * @function
 */

import {View, 
        Text, 
        Image, 
        StyleSheet
       } from 'react-native';
import {useRef, 
        useState
       } from 'react';
import GLOBALSTYLES from '../../constants/GlobalStyles';
import ProgressStep from '../../components/ProgressStep';
import StyledButton from '../../components/TLPButton';





export default function OnboardIntro({navigation}): JSX.Element {

  const headerText = ['The Taíno People', 'The Taíno Language', 'Variant Disclosure'];

  const image = ['tainomap_tainopeople1', 'tainomap_tainopeople2'];

  const textGroup = [
          'The Taíno are an Indigenous people of the Americas and the original inhabitants of the Caribbean islands and parts of the southern U.S.\nDue to European colonization, which started with the first encounter in 1492, many Taíno people hid or were killed.',
          'However, there are many people of Caribbean descent who have Taíno ancestry and are reclaiming Taíno culture. Organizations such as Casa Areyto and other individuals are working to revitalize the Taíno language and culture.',
          'As Europeans colonized the Americas, there were gradually fewer inhabitants who spoke Taíno. However, Javier A. Hernández, spurred the restoration of the Taíno language by creating Tainonaíki, a modern reconstruction of Taíno.',
          'A Taíno language specialist, Puerto Rican hyperpolyglot, linguist, and Indigenous rights activist, Hernández wrote “Primario Básico del Taíno-Borikenaíki” , which took 9 years of research and reconstruction and kickstarted this revitalization.',
          'Today, Hernández continues to work on refining this modern reconstruction for current learners and future generations.',
          'Learn Taíno acknowledges all variants of the Taíno culture including various sister languages under the Arawak language family, such as Kalínago, Garífuna, Lokono, and particularly Wayuu, which have contributed to Taíno language revitalization.',
  ]

  const idRef = useRef(0);

  const [text, setText] = useState<string>(textGroup[0]);

  const [img, setImg] = useState<string>(image[0])

  const [header, setHeader] = useState<string>(headerText[0])



  const navOption = (index) => {
    if(idRef.current >= 0 ) {
      
      // idRef.current += 1;
      idRef.current += index;   
    }
    
    else {setText(`${textGroup[idRef.current]}`);} 

    setText(`${textGroup[idRef.current]}`);
    setImg(`${image[idRef.current]}`);
    setHeader(`${headerText[idRef.current]}`);
  }

  // require(`../assets/images/${img}.png`)
  return (
    <View style={GLOBALSTYLES.CONTAINER}>
      <ProgressStep id={idRef.current+1} onPress={() => navOption((idRef.current-1))} />
      <View style={styles.centerGroup}>
        <View style={styles.textWrapper}>
          <Text style={GLOBALSTYLES.HEADING_1}>
            {header}
          </Text>
        </View>
  
        <View style={[styles.imageWrapper, styles.image]}>
          <Image source={require('../../assets/images/tainomap_tainopeople1.png')}/>
        </View>
  
        <View style={styles.textGroup}>
          <Text style={styles.mainText}>
            {text}
          </Text>
        </View>
  
      </View>
     
  
      <View style={[GLOBALSTYLES.BUTTON_WRAPPER, {bottom: 20}]}>
        <StyledButton   
        title={'Continue'}
        titleColor={'#fff'}
        titleSize={16}
        backgroundColor={'#355725'}
        width= {294}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {() => navOption(idRef.current+1)}
        icon={false}
        iconName={''}
        iconSource={''}
        iconStyle={undefined}
        buttonText={GLOBALSTYLES.BUTTON_TEXT}
        otherProps={GLOBALSTYLES.BUTTON_NAV} />
      </View>
    </View>
  )
}





const styles = StyleSheet.create({
  centerGroup: {
    display: 'flex',
    width: 'auto',
    paddingTop: 32,
    paddingRight: 32,
    paddingBottom: 0,
    paddingLeft: 32,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  textWrapper: {
    
  },
  imageWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: { 
    width: 313,
    height: 129,
  },
  textGroup: {
    paddingVertical: 64,
    // position: 'relative',
  },
  mainText: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28, /* 175% */
  },

})