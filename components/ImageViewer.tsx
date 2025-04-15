import { StyleSheet } from "react-native";
import {Image, type ImageSource} from 'expo-image';

//imgSource is the type of thing that will be be accepted for the function
type Props = {
    imgSource: ImageSource;
};

//once imgSource is given it will return the image with the style already added
export default function ImageViewer({ imgSource }: Props){
    return <Image source={imgSource} style={styles.image}/>;
}

//any image given to the function will be given these styles
const styles = StyleSheet.create({ 
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }

});