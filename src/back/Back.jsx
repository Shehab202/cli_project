import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TopNavigation = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate('tab', {screen: 'mainNews'});
  };
  return (
    <Layout style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.Button}>
        <AntDesign
          name="arrowleft"
          size={35}
          color="rgb(3, 155, 229)"
          style={styles.icon}
        />
      </TouchableOpacity>
    </Layout>
  );
};

export default TopNavigation;
