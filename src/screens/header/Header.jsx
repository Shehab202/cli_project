import {Image, View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../../assets/images/mariia-shalabaieva-HyyHIYz_l0A-unsplash.jpg")}/>

   
      <Text status="danger" category="h5" style={styles.title}>
        nk news{' '}
      </Text>
      <Image
        style={styles.img}
        source={require('../../../assets/images/alex-suprun-1JGHAAdbL_Y-unsplash.jpg')}
      />
    </View>
  );
};

export default Header;
