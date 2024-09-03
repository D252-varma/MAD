import React, { useState } from 'react';
import { View, StyleSheet, ToastAndroid, Button, StatusBar, Text } from 'react-native';

const App = () => {
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('#000000');
  const [toggle, setToggle] = useState(false);

  const showToast = () => {
    ToastAndroid.show('Toggle button toasted', ToastAndroid.SHORT);
    setToggle(!toggle);
    setFontSize(toggle ? 16 : 24);
    setFontColor(toggle ? '#000000' : '#FF0000');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize, color: fontColor }}>This is a sample text.</Text>
      <Button title="Change Font" onPress={showToast} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#B4D6CD',
    padding: 8,
  },
});

export default App;