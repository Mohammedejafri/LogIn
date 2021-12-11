import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView,TouchableOpacity, TextInput , Image ,StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Header_title}>Cookie Time</Text>
      </View>


      <View style={styles.body}>
        <Image style = {styles.logo} source={require("./assets/cookie.png")} />
        <TextInput style ={styles.textfield} placeholder="Email" />
        <TextInput style ={styles.textfield} placeholder="Password" secureTextEntry={true}/>
        <View style = {styles.ForgotPassword}><TouchableOpacity><Text style={styles.password}>Forgot Password</Text></TouchableOpacity></View>
        <View style = {styles.createAccount}><TouchableOpacity><Text style={styles.Account}>Create An Account</Text></TouchableOpacity></View>

        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Log in</Text></TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },

  header: {
    height:80,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {

    width: "100%",
    alignItems:'center',
  },
  Header_title: {
    color: "#fff",
    marginTop: 25,
    fontSize: 18,
  },
  logo:{
    width:100,
    height:100,
    margin: 15,
    resizeMode: "contain",
    marginTop:40,
  } , 
  textfield:{
    width: '80%',
    height:50,
    borderColor:'black',
    borderRadius:20,
    borderStyle:'solid',
    borderWidth: 1,
    marginTop:20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  button:{
    backgroundColor:'black',
    width:'80%',
    color:'#ffffff',
    height:40,
    margin:30,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',

  },
  buttonText:{
    color:'#ffffff',
    fontSize:18,
    fontWeight:'bold',

  },
  ForgotPassword:{
    width:'75%',
    alignItems:'flex-end',
    marginTop:5,
  },
  createAccount:{
    justifyContent:'center',
    marginTop:20,
    
  },
  password:{
    fontSize:10,
    fontWeight:'bold',
  }
,
  Account:{
    fontSize:14,
    fontWeight:'bold',
  }
});
