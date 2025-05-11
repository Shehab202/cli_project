import {View, Image, TouchableOpacity, Linking} from 'react-native';
import {Text} from '@ui-kitten/components';
import {Button, Layout} from '@ui-kitten/components';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loading from '../spinner/Spinner ';
import styles from './styles';
import Header from '../header/Header';
import TopNavigation from '../../back/Back';
const Details = () => {
  const route = useRoute();
  const {item} = route.params;
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return item ? (
    <>
    <Header />
      <TopNavigation />
      <Layout style={styles.container}>
        <Image style={styles.image} source={{uri: item?.image}} />
        <Text style={styles.text} category="h5">
          {item?.title}
        </Text>
        <Text style={styles.text} appearance="hint">
          {item?.description}
        </Text>
        <Text style={styles.text} appearance="hint">
          {item?.content}
        </Text>
      <Button
        style={styles.button}
        appearance="outline"
        onPress={() => Linking.openURL(item?.url)}>
        go to full news
      </Button>
      </Layout>

    </>
  ) : (
    <Loading />
  );
};

export default Details;
