import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { getTrackDetails } from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../common/Loading';
//import TaskRow from './listrows/TaskRow';
const artist = "cher";
const trackName = "believe";

class TrackDetails extends Component {
    componentDidMount(){
        const {getTrackDetails} = this.props;
        getTrackDetails(artist, trackName);
    }
  static propTypes = {
    showLoading: PropTypes.bool,
    taskArray: PropTypes.array, 
  };

//   _renderRow({item}) {
//     return(
//       <TaskRow
//         rowData={item}/>
//     );
//   }

  _keyExtractor(data) {
    return data.id;
  }

  _renderScreen() {
    if (this.props.showLoading) {
      return (
        <Loading/>
      );
    } else {
      return (
        <View>
          <Text>{this.props.trackDetails.track.artist}</Text>
        </View>
        
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderScreen()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

const mapStateToProps = state => ({trackDetails  : state.trackDetailsReducer.trackDetails });

const mapDispatchToProps = dispatch => ({getTrackDetails : (artist, trackName) => 
    dispatch(getTrackDetails(artist, trackName))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetails);
