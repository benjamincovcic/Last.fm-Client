import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { getCountryList } from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../common/Loading';
//import TaskRow from './listrows/TaskRow';

class CountryList extends Component {
    componentDidMount(){
        const {getCountryList} = this.props;
        getCountryList();
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
          <FlatList
            style={{paddingVertical: 10, marginLeft: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.countryList}
            renderItem={this._renderRow}
          keyExtractor={this._keyExtractor} />
        </View>
        
      );
    }
  }

  render() {
      console.log(this.props.countryList);
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

const mapStateToProps = state => ({ countryList : state.homeReducer.countryList });

const mapDispatchToProps = dispatch => ({getCountryList : () => 
    dispatch(getCountryList())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
