import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
// import {CellComponent} from './components/CellComponent'
import { Col, Row, Grid } from "react-native-easy-grid";




export default function App() {

  const [score, setScore] = useState(0);
  const [showAcorn, setShowAcorn] = useState(false);

  const increaseScore = () => {
    setScore(score + 1)
  }
  
  
  const handleEvent = () => {
  
    console.log(showAcorn)
   
    const num = Math.round(Math.random()*1)
    console.log(num)
    if (num == 1) {
      console.log(`the number is ${num}`)
      setShowAcorn(true)
      increaseScore()
      console.log(score)

  
  
      // increase score by one
      // return default styling
    } else {
      console.log(`the number is ${num}`)
      setShowAcorn(false)
  
      //no score
  
    }
  }

  useEffect(() => {
    
  })

  return(
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30}}>SQUIRREL GAME</Text>
      
    <Grid style={{alignItems: "center"}}>
      <Row style={styles.border}>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
      </Row>
      <Row style={styles.border}>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
      </Row>
      <Row style={styles.border}>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
      </Row>
      <Row style={styles.border}>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
      </Row>
      <Row style={styles.border}>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
        <Col onPress={handleEvent} style={{backgroundColor: "#228b22"}}> 
          {
            showAcorn ? (
              <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10}}>🌰</Text>
              </View>
              ) : ( 
                <View> 
                <Text style={{color: "white", fontSize: 40, paddingLeft: 10, paddingTop: 10 }}>🍀</Text>
              </View>)
          } 
        </Col>
      </Row>

    </Grid>
    <View style={{height: 200, alignItems: 'flex-start'}}>
      <Text style={{fontSize:30}}>Current nuts: {score}</Text>
    </View>
    

    </SafeAreaView>

  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 200
    
  },

  border: {

    height: 60,
  }
});
