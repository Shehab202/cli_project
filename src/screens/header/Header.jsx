import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {ToggleMood} from '../../store/themeSlice';
import {ToggleSimpleUsageShowcase} from '../settings/Toggle';
const Header = () => {
  const {navigate} = useNavigation();
  const goToSettings = () => {
    navigate('settings');
  };

  const goToHome = () => {
    navigate('tab', {screen: 'mainNews'});
  };
  return (
    <SafeAreaView edges={['left', 'right', 'top']}>
      <Layout style={styles.container}>
        <ToggleSimpleUsageShowcase />
        <Text
          status="danger"
          category="h5"
          style={styles.title}
          onPress={goToHome}>
          nk news
        </Text>
        <TouchableOpacity onPress={goToSettings}>
          <Image
            style={styles.img}
            source={require('../../../assets/images/alex-suprun-1JGHAAdbL_Y-unsplash.jpg')}
          />
        </TouchableOpacity>
      </Layout>
    </SafeAreaView>
  );
};
export default Header;
