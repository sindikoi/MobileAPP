import { Image, StyleSheet, Platform,Text,TouchableOpacity,View,Dimensions,} from "react-native";
const  { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (

    <View style ={styles.container} >
    <Text style ={styles.title}>URINE DETECTED</Text>
    <Image source={require('../assets/images/logoforhome.png')}
    style={styles.logo}
    />
    <View style ={styles.descriptionContainer}>
    <Text style ={styles.description}> "Our app is designed to help you manage incontinence and live a
         high-quality life easily, comfortably, and discreetly."
    </Text>    
    </View>
    
    <TouchableOpacity style ={styles.loginButton}>
    <Text style ={styles.buttonText}> login </Text>
    </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    paddingTop: Platform.OS =='ios' ? height * 0.08 : height * 0.05,
    backgroundColor:  '#f0f8ff',
  },
  logo: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,  
    borderBottomRightRadius: 30,  
    marginBottom: 20,            
  },
  title:{
    fontSize:width * 0.07,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom:15,
    color:'#1a1a1a',
    textAlign:'center',
    letterSpacing:1,
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'flex-start'
},
description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#4a4a4a',
    textAlign: 'left',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginTop: 'auto',
    marginBottom: 100,
    borderRadius: 25,
    elevation: 5,          
    shadowColor: '#000',   
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
 });
