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

ComponentDidMount = () => {
const tutors = axios.get('http://localhost:8000/tutors')
this.setState({
  tutors:tutors,
})
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
    <View>
      {/* {this.state.tutors.map((ele)=>{return ele})} */}
      <Text>tutors</Text>
    </View>
    )
  }
}
