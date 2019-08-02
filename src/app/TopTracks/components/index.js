import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { getTopTracks } from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../common/Loading';
//import TaskRow from './listrows/TaskRow';
const countryName = "spain";

class TopTracks extends Component {
    componentDidMount(){
        const {getTopTracks} = this.props;
        getTopTracks(countryName);
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
        <View containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.props.tracksList}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.name}
              subtitle = {item.artist.name}
              containerStyle={{ borderBottomWidth: 0 }}
              rightIcon={<Image style={{width: 30, height: 30}} source={{uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-512.png"}}></Image>}
            />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
        
      );
    }
  }

  render() {
      console.log(this.props.tracksList);
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

const mapStateToProps = state => ({tracksList  : state.topTracksReducer.tracksList });

const mapDispatchToProps = dispatch => ({getTopTracks : (countryName) => 
    dispatch(getTopTracks(countryName))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopTracks);
