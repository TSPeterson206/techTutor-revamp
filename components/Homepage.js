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

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (
      <View>
        <Text>Trial Home Page</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
  
  })
  }
  
  const mapDispatchToProps = (dispatch) => {
    bindActionCreators({}, dispatch)
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage)