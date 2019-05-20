import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
// import console = require('console');
// import console = require('console');

ComponentDidMount = () => {
const tutors = axios.get('http://localhost:8000/tutors')
this.setState({
  tutors:tutors,
})
// console.log(tutors);
}
export default class Tutors extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        // tutors:tutors
      }
  }
  static navigationOptions = {
    title: 'Tutors',
  };

  render() {
    return(
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    <View>
      {this.state.tutors.map((ele)=>{return ele})}
      <Text>tutors</Text>
    </View>
    )
  }
}
