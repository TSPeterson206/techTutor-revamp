import React from 'react';
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

class Tutors extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        allTutors:getTutors
      }

      console.log(getTutors)
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

const mapStateToProps = (state) => {
return ({

})
}

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({getTutors}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Tutors)