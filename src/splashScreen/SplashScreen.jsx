import {View} from 'react-native';
import styles from './styles';
import {Icon, Layout, List, ListItem, Text} from '@ui-kitten/components';
import {Image} from 'react-native';
import image1 from '../../assets/images/Flux_Dev_Create_a_stylized_PNG_image_of_a_loading_symbol_witho_1-removebg-preview.png';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image1} />
    </View>
  );
};

export default SplashScreen;
