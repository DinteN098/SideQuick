import {View, StyleSheet } from "react-native";
//importing stuff from a different file in the project

import ImageViewer from "@/components/ImageViewer"; 
import Button from "@/components/Button";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() { 
  return (
    //View with the Style object features
    //Text with the Style object features
    //layer for the buttons on the navigation?
    <View style={styles.container}> 
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo"/>
        <Button label="Use this photo"/>
      </View>
    </View>
  );
}

//like a box with presets for different thing like text, image, etc
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex:1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});