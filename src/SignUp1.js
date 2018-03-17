import React from 'react';
//import FitImage from 'react-native-fit-image';
import { StyleSheet, Text, Image, View } from 'react-native';
//const remote = "https://www.nautilusplus.com/healthy-alternatives-junk-food/"
//const width = Dimensions.get('window').width
export default class App extends React.Component {
  render() {
    return (
      <View>
	  <Image
	  	style={{width:400, height: 100,resizeMode:'center',marginTop:50,
	
		justifyContent: 'center', alignSelf:'center'}}
		//alignItems: 'center',
		
		source={require('./are3.png')}
	
		/>
	

	<View style={{flexDirection:'row'}}>
	  <Image
	   style={{width:200, height: 400,alignSelf:'flex-start',flexWrap:'wrap',marginTop:20}}
	  source={require('./vendor-clipart-1.jpg')}
	  
	  />

	  

	 

	  <Image
	  style={{width:200, height: 400,alignSelf:'flex-end',flexWrap:'wrap',marginLeft:12,marginTop:20}}
	  source={require('./customer.jpg')}
	  />
	  
	  </View>
	  </View>
    );
  }
}


