import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from './Header';

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon="Menu"
          title="Setting"
          hasShadow={false}
          onLeftIconPress={this.props.navigation.openDrawer}
        />
        <View style={styles.center}>
          <Text style={styles.text}>This is the Setting screen</Text>
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

export default SettingScreen;
