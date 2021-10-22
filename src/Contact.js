import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from './Header';

class Contact extends React.Component {
  render() {
    console.log('fine');
    return (
      <View style={styles.container}>
        <Header
          leftIcon="Menu"
          title="Contact"
          hasShadow={false}
          onLeftIconPress={this.props.navigation.openDrawer}
        />
        <View style={styles.center}>
          <Text style={styles.text}>This is the Contact screen</Text>
          <Button
            title="Go to Home Screen"
            onPress={() => this.props.navigation.navigate('Home')}
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

export default Contact;
