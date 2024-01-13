/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @returns {JSX.Element}
 * @function
 */

import {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NativeBaseProvider} from 'native-base';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

// import { connect } from 'react-redux';

import Signup from './screens/auth/signup';
import Login from './screens/auth/login';
import Layout from './screens/app/_layout';
import Welcome from './screens/introexperience/welcome';
import OnboardIntro from './screens/introexperience/onboardintro';
import ProgressStep from './components/ProgressStep';
import Card from './components/TLPCard';
import CreateProfile from './screens/introexperience/createprofile';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const authStack = createStackNavigator();

const initialStack = createStackNavigator();



function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default function App(mainProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigationRef = useNavigationContainerRef();

  const [email, setEmail] = useState<boolean>(true);

  // manage Splashscreen from here ??
  useEffect(() => SplashScreen.hide(), [])

  return <Card text = "nonedfasddfsdfsdfdfdsfsdfsdfdfsf" />;

  // render _layout.tsx in production ??
  // if(!email) {
  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //       <NavigationContainer ref={navigationRef}>
  //         <authStack.Navigator initialRouteName='Login'>
  //           <authStack.Screen name='Login' component={Login} />
  //         </authStack.Navigator>
  //       </NavigationContainer>
  //   </SafeAreaView>
  // );
  //       }

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <NavigationContainer ref={navigationRef}>
  //       <initialStack.Navigator initialRouteName='Welcome'>
  //         <initialStack.Screen name='Welcome' component={Welcome} />
  //         <initialStack.Screen name='OnboardIntro' component={OnboardIntro} />
  //       </initialStack.Navigator>
  //     </NavigationContainer>
  //   </SafeAreaView>
  // )

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <NavigationContainer ref={navigationRef}>
  //       {!email ?
  //       <initialStack.Navigator initialRouteName='Welcome'>
  //         <initialStack.Screen name='Welcome' component={Welcome} />
  //         <initialStack.Screen name='OnboardIntro' component={OnboardIntro} />
  //       </initialStack.Navigator>
  //       :
  //       <authStack.Navigator initialRouteName='Login'>
  //           <authStack.Screen name='Login' component={Login} />
  //       </authStack.Navigator>
  //       }
  //     </NavigationContainer>
  //   </SafeAreaView>
  // )
};

// automatically connect or initialize to the NPL_Server
// pass/dispatch user state to the Server after authentication 
// export default connect(
//   (state) => ({
//     displayName: state.getIn(['user', 'displayName']),
//     email: state.getIn(['user', 'email']),
//     emailVerified: state.getIn(['user', 'emailVerified']),
//     uid: state.getIn(['user', 'uid']),
//   }),
//   (dispatch) => ({
//     userActions: bindActionCreators(<reUserActions>, dispatch),
//   }),
// )(App);

// TODO: add global theme and config parameters to NativeBaseProvider
// isSSR?? is probably only good for rendering websites with react
// user or email as condition
// user ? (
// <NativeBaseProvider>
//   <NavigationContainer ref={navigationRef} >
//     <authStack.Navigator screenOptions={} >
//       <authStack.Screen name='Login' component={Login} />
//       <authStack.Screen name='Signup' component={Signup} />
//       <authStack.Screen name='restPassword' component={restPassword} />
//     </authStack.Navigator>
//   </NavigationContainer>
// </NativeBaseProvider>) : (
//   <NativeBaseProvider>
//   <PageProvider>
//     <MainScreen />
//     </PageProvider>
//   </NativeBaseProvider>
// )

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});











  /* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */

