import React from 'react'
import { Linking, FlatList, View } from 'react-native'
import { ListItem } from 'react-native-elements';

export default class StackoverflowScreen extends React.Component {
  state = {
    page: 1,
    isLoading: true,
    hasMore: true,
    items: []
  }

  loadItems = () => {
    const { items, page } = this.state;
    this.setState({ isLoading: true });

    fetch(`https://api.stackexchange.com/2.2/search/advanced?page=${page}&pagesize=100&order=desc&sort=activity&tagged=react-native&site=stackoverflow`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          hasMore: responseJson.has_more,
          items: page === 1 ? responseJson.items : [...items, ...responseJson.items],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleRefresh = () => {
    this.setState({
      page: 1,
    }, () => {
      this.loadItems();
    });
  };

  handleLoadMore = () => {
    if (this.state.hasMore) {
      this.setState({
        page: this.state.page + 1
      }, () => {
        this.loadItems();
      });
    }
  };


  componentDidMount() {
    this.loadItems()
  }

  handleClick(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  render() {
    const { isLoading, items } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={`Answers: ${item.answer_count}`}
              onPress={() => this.handleClick(item.link)}
            />
          )}
          keyExtractor={i => i.title}
          refreshing={isLoading}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndThreshold={0}
        />
      </View>
    );
  }
}