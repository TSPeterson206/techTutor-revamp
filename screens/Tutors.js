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
axios.get('http://localhost:8000/tutors')
.then(res => {
  const tutors = res.data;
  let newTutors = fetch('http://localhost:8000/tutors')
  return tutors
})
this.setState({
  tutors:tutors,
  newTutors:newTutors
})
}

// axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }


export default class Tutors extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        tutors:tutors,
        newTutors:newTutors
      }
  }
  static navigationOptions = {
    title: 'Tutors',
  };

  render() {
    return(
    <View>
      {this.state.tutors.map((ele)=>{return ele})}
      <Text>tutors</Text>
    </View>
    )
  }
}
