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


class Tutors extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        allTutors:getTutors
      }

      console.log(this.state.allTutors)
  }

  handleLogIn = () => this.props.navigation.navigate('Homepage')

  static navigationOptions = {
    title: 'Tutors',
  };

  render() {
    return(
      <View>
    <TouchableOpacity onPress={this.handleLogIn}>
      {/* {this.state.tutors.map((ele)=>{return ele})} */}
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