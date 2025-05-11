import {Layout, Text, Input, Button} from '@ui-kitten/components';
import styles from './styles';
import {TextInput, View} from 'react-native';
import {useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigation = useNavigation();
  const goToHome = () => {
    if (emailPattern.test(username) === true && password.length > 8) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'tab',
              state: {
                routes: [{name: 'mainNews'}],
              },
            },
          ],
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Login successfully',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'wrong username or password',
      });
    }
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [
    //       {
    //         name: 'tab',
    //         state: {
    //           routes: [{name: 'mainNews'}],
    //         },
    //       },
    //     ],
    //   }),
    // );
  };
  return (
    <Layout style={styles.container}>
      <Text style={styles.title} category="h1">
        Login Screen
      </Text>
      <Text category="h6" appearance="hint">
        if you want to login
      </Text>
      <View style={styles.inputContent}>
        <Input
          label={'username'}
          style={styles.input}
          placeholder="enter your username"
          value={username}
          onChangeText={nextValue => setUsername(nextValue)}
        />
      </View>
      <View style={styles.inputContent}>
        <Input
          label={'password'}
          style={styles.input}
          placeholder="enter your username"
          value={password}
          onChangeText={nextValue => setPassword(nextValue)}
          secureTextEntry={true}
        />
      </View>
      <Button style={styles.button} status="warning" onPress={goToHome}>
        Login
      </Button>
    </Layout>
  );
};
export default Login;
