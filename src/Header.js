import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconGenerator from './IconComp/Index';

function Header({
  title,
  onLeftIconPress = () => {},
  leftIcon,
  hasShadow = true,
  children,
}) {
  return (
    <View style={[styles.header, hasShadow && styles.shadow]}>
      {leftIcon && (
        <TouchableOpacity style={styles.icon} onPress={onLeftIconPress}>
          <IconGenerator tagName={leftIcon} />
        </TouchableOpacity>
      )}
      <View style={styles.rowView}>
        {title && <Text style={styles.headertxt}>{title}</Text>}
        {children}
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    zIndex: 99999,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  headertxt: {
    color: '#464664',
    fontSize: 20,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  shadow: {
    shadowColor: '#8EBE6E59',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  icon: {
    padding: 10,
  },
});
