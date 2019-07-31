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

class TrackDetails extends Component {
    componentDidMount(){
        const {getTrackDetails} = this.props;
        getTrackDetails();
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
          {/* <FlatList
            style={{paddingVertical: 10, marginLeft: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.tracksList}
            renderItem={this._renderRow}
          keyExtractor={this._keyExtractor} /> */}
        </View>
        
      );
    }
  }

  render() {
      console.log(this.props.trackDetails);
    return (
      <View style={styles.container}>
        {this._renderScreen()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
});

const mapStateToProps = state => ({trackDetails  : state.trackDetailsReducer.trackDetails });

const mapDispatchToProps = dispatch => ({getTrackDetails : () => 
    dispatch(getTrackDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetails);
