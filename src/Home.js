import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from './Header';

class Home extends React.Component {
  render() {
    console.log('fine');
    return (
      <View style={styles.container}>
        <Header
          leftIcon="Menu"
          title="Home"
          hasShadow={false}
          onLeftIconPress={this.props.navigation.openDrawer}
        />
        <View style={styles.center}>
          <Text style={styles.text}>This is the home screen</Text>
          <Button
            title="Go to Details Screen"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    marginVertical: 40,
  },
});

export default Home;
