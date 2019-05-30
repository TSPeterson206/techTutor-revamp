import React, { Component} from 'react';
// import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import getTutors from '../actions/tutors'
import BottomNav from './BottomNav'
import axios from 'react-native-axios'
import Tutor from './Tutor'

class Tutors extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        allTutors:getTutors,
        dataSource:[]
        // toots:newVar.data
      }
      console.log('constructor', this.state.dataSource)
  }

componentDidMount() {
  this.getAllTutors()
  // console.log('constructor', this.state.dataSource)

  return axios.get('http://192.168.0.34:8000/tutors')
// .then(response => response.json())
.then((responseJson)=> {
  this.setState({
   dataSource: responseJson
  })
  console.log('hello', this.state.dataSource.data)
})
.catch(error=>console.log(error)) //to catch the errors if any
}

getAllTutors = async () => {
  try {
  const allTutors = await axios.get('http://192.168.0.34:8000/tutors')
  this.setState({
   dataSource: allTutors.data
  })
  console.log('hi', allTutors.data)
} catch (err) {
  console.log(err)
}
}

  handleLogIn = () => this.props.navigation.navigate('Homepage')

  static navigationOptions = {
    title: 'Tutors',
  };

  render() {
    return(
      <View>
    <TouchableOpacity style={styles.container} onPress={this.handleLogIn}>
      <View>
      <Text>{this.state.dataSource ? this.state.dataSource.map((ele)=>{
        <Tutor
          tutorname={ele.tutorname}
          >
        </Tutor> 
      }): null}</Text>
      </View>
      <Text>tutors</Text>
    </TouchableOpacity>
      <View>
      <BottomNav />      
    </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
return ({

})
}

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({getTutors}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Tutors)

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
});