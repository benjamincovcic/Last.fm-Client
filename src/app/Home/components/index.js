import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { getCountryList } from '../actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../common/Loading';
import tabNavigator from '../../../navigation/MainTabNavigator';
//import TopTracks from '../app/TopTracks/components/index';

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
  updateSearch = search => {
    this.setState({ search });
  };
  renderHeader = () => {
    const { search } = this.props.countryList;
    return <SearchBar onChangeText={this.updateSearch} placeholder="Type Here..." lightTheme round />;
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };
  goToTracks(){
    return(
      <TopTracks></TopTracks>
    )
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
          data={this.props.countryList}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={item.name}
              avatar={{ uri: item.flag }}
              containerStyle={{ borderBottomWidth: 0 }}
              onPress={()=>this.props.navigation.navigate('Tracks')}
            />
          )}
          keyExtractor={item => item.numericCode}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
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

const mapStateToProps = state => ({ countryList : state.homeReducer.countryList });

const mapDispatchToProps = dispatch => ({getCountryList : () => 
    dispatch(getCountryList())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
