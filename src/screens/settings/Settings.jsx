import {View, Text} from 'react-native';
import React from 'react';
import {Button, Layout} from '@ui-kitten/components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../header/Header';
import Toast from 'react-native-toast-message';
const Settings = () => {
  const {reset} = useNavigation();
  const goToLogin = () => {
    reset({
      index: 0,
      routes: [{name: 'login'}],
    });
    Toast.show({
      type: 'success',
      text1: 'Logout successfully',
    });
  };
  return (
    <>
      <Header />
      <Layout style={styles.container}>
        <Button style={styles.button} status="warning" onPress={goToLogin}>
          Logout
        </Button>
      </Layout>
    </>
  );
};

export default Settings;
