import React from 'react'
import { StyleSheet, Text, View, Image, ListView, ActivityIndicator } from 'react-native'

export default class Screen2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen Two',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=2`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
      return fetch('https://api.stackexchange.com/2.2/search/advanced?pagesize=100&order=desc&sort=activity&tagged=react-native&site=stackoverflow')
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.items),
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
      }

  render() {
    if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }

   return (
     <View style={{flex: 1, paddingTop: 20}}>
       <ListView
         dataSource={this.state.dataSource}
         renderRow={(rowData) => <Text style={styles.row}>{rowData.title}</Text>}
       />
     </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    padding: 5
  }
})
