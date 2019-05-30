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
        <View>
      <Text>{!this.state.dataSource ? this.state.dataSource.data.map((ele)=>{
        <Tutor
          tutorname={ele.tutorname}
          >
        </Tutor> 
      }): null}</Text>
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
    bindActionCreators({}, dispatch)
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Homepage)