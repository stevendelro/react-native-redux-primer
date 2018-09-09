import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => (
  { libraries: state.libraries }
);


export default Connect(mapStateToProps)(LibraryList);
