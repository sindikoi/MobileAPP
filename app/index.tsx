import { Image, StyleSheet, Platform,Text,TouchableOpacity,View } from "react-native";

export default function HomeScreen() {
  return (
    <View style ={styles.container} >
    <Image source={require('@/assets/images/logoforhome.png')}
    style={styles.logo}
    />
    <Text style ={styles.title}> ברוכים הבאים ל-{'\n'} URINE DETECTED</Text>
    <Text style ={styles.description}> האפליקציה שלנו נועדה לסייע לך להתמודד עם בריחת שתן ולחיות באיכות חיים גבוהה-בקלות, בנוחות ובדיסקרטיות
    </Text>
    <TouchableOpacity style ={styles.loginButton}> <Text style ={styles.buttonText}> login </Text></TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    paddingTop:50,
    backgroundColor:  '#f0f8ff',
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,  
    borderBottomRightRadius: 30,  
    marginBottom: 20,            
  },
  title:{
    fontSize:28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom:15,
    color:'#1a1a1a',
    textAlign:'center',
    letterSpacing:1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,       // מרווח בין שורות
    marginBottom: 20,
    color: '#4a4a4a',
    textAlign: 'center',
    paddingHorizontal: 30,
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
