import {
        useState, 
        useRef, 
        useEffect
      } from 'react';
import {
        View, 
        Text, 
        Image, 
        StyleSheet, 
        FlexStyle
      } from 'react-native';
import ProgressStep from '../../components/ProgressStep';
import StyledButton from '../../components/TLPButton';
import Result from '../../components/TLPResult';

type displayflex = FlexStyle['display'];

export default function introQuestion() {

  const idRef = useRef<number>(0);

  const [titleBackgroundColor, setTitleBackgroundColor] = useState<string>('');

  const [backgroundColor, setBackgroundColor] = useState<string>('#DEDEDE')

  const [title, setTitle] = useState<Array<string>>([]);

  const [questionRef, setQuestionRef] = useState<number>(0);

  const [displayResult, setDisplayResult] = useState<string>('none');

  const [textValue, setTextValue] = useState<boolean>(false);

  // const color = useRef(backgroundColor);

  const question = ['The Taíno are an Indigenous people of the Americas and the original inhabitants of _____.', 'What is Tainonaíki?', 'Which of these languages are under the Arawak language family?', 'Which of these languages are under the Arawak language family?'];

  const titleAnswerChoice0 = ['The Caribbean & Southern US', 'The Caribbean  & Nouthern US', 'South America', 'Central America'];
  const titleAnswerChoice1 = ['A modern reconstruction of Taíno', 'A historical Taíno document', 'A Taíno poem', 'A celebration of Taíno'];
  const titleAnswerChoice2 = ['Kalínago', 'Garífuna', 'Wayuu', 'All of the above'];

  let answerChoice = 'introquestion0';

  useEffect(() => { 
   switch (answerChoice) {
      case 'introquestion0': 
        setTitle(titleAnswerChoice0);
        setQuestionRef(0);
        break;
      case 'introquestion1': 
        setTitle(titleAnswerChoice1);
        setQuestionRef(1);
        break;
      case 'introquestion2': 
        setTitle(titleAnswerChoice2);
        setQuestionRef(2);
        break;
    }
 }, [answerChoice]);

const handleBackgroundColor = (idAnswerChoice) => {
  setTitleBackgroundColor(title[idAnswerChoice]);
  if(backgroundColor === '#A8A8A8' && (titleBackgroundColor === 'The Caribbean & Southern US' || titleBackgroundColor === 'All of the above' || titleBackgroundColor === 'A modern reconstruction of Taíno')) {
    setBackgroundColor('355725')
  }
  
  setBackgroundColor('#A8A8A8');
 
}

  //  (() => {
  //     if(question === 'introquestion1') {
  //     setTitle(titleQuestion1);
  //   }
  //    else if(question === 'introquestion2') {
  //     setTitle(titleQuestion2);
  //   }
  //    else if(question === 'introquestion3') {
  //     setTitle(titleQuestion3);
  //   }
  //    else if(question === 'introquestion4') {
  //     setTitle(titleQuestion4);
  //   }
  // })();

  return (
    <View style={styles.questionContianer}>
      <ProgressStep id={1} />

      <View style={styles.textWrapper}>
      <Text style={[styles.text, {fontSize: answerChoice === 'introquestion1' ? 32 : 24}]}>
        {question[questionRef]}
      </Text>
      </View>

      <View style={[styles.buttonContainer, {paddingTop: answerChoice === 'introquestion1' ? 147 : 102}]}>
        <StyledButton   
          title={title[0]}
          titleColor={'#101828'}
          titleSize={16}
          backgroundColor={titleBackgroundColor === title[0] ? backgroundColor : '#DEDEDE'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => handleBackgroundColor(0)}
          icon={false}
          iconName={''} 
          iconSource={''}
          iconStyle={undefined}
          buttonText={styles.buttonText}
          otherProps={styles.button} />
        <StyledButton   
          title={title[1]}
          titleColor={'#101828'}
          titleSize={16}
          backgroundColor={titleBackgroundColor === title[1] ? backgroundColor : '#DEDEDE'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => handleBackgroundColor(1)}
          icon={false}
          iconSource={''}
          iconName={''}
          iconStyle={undefined}
          buttonText={styles.buttonText}
          otherProps={styles.button} />
        <StyledButton   
          title={title[2]}
          titleColor={'#101828'}
          titleSize={16}
          backgroundColor={titleBackgroundColor === title[2] ? backgroundColor : '#DEDEDE'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => handleBackgroundColor(2)}
          icon={false}
          iconSource={''}
          iconName={''}
          iconStyle={undefined}
          buttonText={styles.buttonText}
          otherProps={styles.button} />
        <StyledButton   
          title={title[3]}
          titleColor={'#101828'}
          titleSize={16}
          backgroundColor={titleBackgroundColor === title[3] ? backgroundColor : '#DEDEDE'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => handleBackgroundColor(3)}
          icon={false}
          iconName={''}
          iconSource={''}
          iconStyle={undefined}
          buttonText={styles.buttonText}
          otherProps={styles.button} />
    
      </View>


      <View style={[styles.resultWrapper, {display:displayResult as displayflex}]}>
        <Result textValue={textValue}  />
      </View>
      <View style={styles.buttonWrapper}>
        <StyledButton   
          title={!textValue ? 'Continue' : 'Try Again'}
          titleColor={'#101828'}
          titleSize={16}
          backgroundColor={!textValue ? '#355725' : '#A8A8A8'}
          width= {294}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {() => {titleBackgroundColor === '' ? setDisplayResult('none') : setDisplayResult('flex'); 
            (titleBackgroundColor === 'The Caribbean & Southern US' || titleBackgroundColor === 'All of the above' || titleBackgroundColor === 'A modern reconstruction of Taíno') ? setTextValue(true) : setTextValue(false); 
            handleBackgroundColor(0)}}
          icon={false}
          iconName={''}
          iconSource={''}
          iconStyle={undefined}
          buttonText={styles.buttonText}
          otherProps={styles.buttonNav} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  questionContianer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textWrapper: {
    width: 'auto',
    paddingTop: 26,
    paddingHorizontal: 12,
  },
  text: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
  resultWrapper: {
    display: 'flex',
    width: 'auto',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 32,
    // paddingTop: 140,
    paddingHorizontal: 48,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  buttonContainer: {
    display: 'flex',
    
    // paddingTop: 75,
    paddingBottom: 92,
    paddingHorizontal: 27,
    // top: 220,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonWrapper: {
    display: 'flex',
    width: 'auto',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 48,
    // paddingTop: 140,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  
  },
  button: {
    borderRadius:  16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    padding: 12,
  },
  buttonNav: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  buttonText: {
    color: '#475467',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
})







  





