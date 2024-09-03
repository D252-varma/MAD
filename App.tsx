import React, { useState } from 'react';

import {
StyleSheet,Text,View,TextInput,
TouchableOpacity,
} from 'react-native';


import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App =  () => {
const onPressLogin = () => {
// Do something about login operation
};
const onPressForgotPassword = () => {
// Do something about forgot password operation
};
const onPressSignUp = () => {
// Do something about signup operation
};
const [state,setState] = useState({
email: '',
password: '',
})
return (
<View style={styles.container}>
<Text style={styles.title}>LOGIN</Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
onChangeText={text => setState({...state, email: text})}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={text => setState({...state, password: text})}/>
</View>
<TouchableOpacity
onPress = {onPressForgotPassword}>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText
}>Login</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressSignUp}>
<Text style={styles.forgotAndSignUpText} >Signup</Text>
</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#000000",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#088395",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  // Add the missing loginText style
  loginText: {
    color: "white",
    fontSize: 18,  // Adjust font size as needed
    fontWeight: "bold"  // Optional: to make the text bold
  }
});
export default App;
