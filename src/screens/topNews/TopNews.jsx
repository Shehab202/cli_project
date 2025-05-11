import {
  ImageBackground,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Layout, List} from '@ui-kitten/components';
import {Card} from '@ui-kitten/components';
import imag1 from '../../../assets/images/good-good-good-wyN0QFDiXw0-unsplash.jpg';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {addToFavorite} from '../../store/FavoriteSlice';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

const TopNews = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [topNews, setTopNews] = useState([]);
  const getAllData = async () => {
    try {
      const {data} = await axios.get(
        "https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=10&apikey=68fbfdf0558ae5f8f262097231f7920a",
      );
      setTopNews(data.articles);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);
  const goToDetails = item => {
    navigation.navigate('details', {item});
  };
  const pressHandler = item => {
    try {
      dispatch(
        addToFavorite({
          ...item,
          id: item.title + item.publishedAt,
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Added to favorite',
      });
    } catch (error) {
      Toast.show({
        type: 'success',
        text1: error,
      });
    }
  };
  return (
    <List
      data={topNews}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <Layout style={styles.container}>
          <Card onPress={() => goToDetails(item)} style={styles.card}>
            <ImageBackground
              style={styles.img}
              source={item.image ? {uri: item?.image} : imag1}>
              <View style={styles.whiteBox}>
                <Text numberOfLines={2} style={styles.redBox}>
                  {item?.title}
                </Text>
                <Text numberOfLines={3}>{item?.description}</Text>
              </View>
              <TouchableOpacity style={styles.iconBox}>
                <AntDesign
                  name="heart"
                  size={28}
                  color="rgb(255, 23, 68)"
                  style={styles.icon}
                  onPress={() => pressHandler(item)}
                />
              </TouchableOpacity>
            </ImageBackground>
          </Card>
        </Layout>
      )}
    />
  );
};
export default TopNews;
