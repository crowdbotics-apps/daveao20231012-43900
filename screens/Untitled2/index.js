import { CheckBox } from "react-native-elements";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><CheckBox style={styles.QlrVzgZT} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  QlrVzgZT: {
    width: 183,
    height: 69
  }
});
export default Untitled2;