import React, {useEffect, useState} from 'react';
import {Icon, Layout, List, ListItem, Text} from '@ui-kitten/components';
import {Card} from '@ui-kitten/components';
import {Button} from '@ui-kitten/components';
import {Image} from 'react-native';
import styles from './styles';
import axios from 'axios';
import Loading from '../spinner/Spinner ';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToFavorite} from '../../store/FavoriteSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-toast-message';

const ListOfNews = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  const getAllData = async () => {
    const {data} = await axios(
        'https://gnews.io/api/v4/top-headlines?category=general&lang=ar&max=10&apikey=68fbfdf0558ae5f8f262097231f7920a',
    );
    setNews(data.articles);
  };
  useEffect(() => {
    getAllData();
  }, []);
  const goToDetails = item => {
    navigation.navigate('details', {item});
  };
  const pressHandler = item => {
    dispatch( addToFavorite({
    ...item,
    id: item.title + item.publishedAt
  }));
    Toast.show({
      type: 'success',
      text1: 'Added to favorite',
    });
  };
  const renderItem = ({item}) => (
    <ListItem
      style={styles.listStyle}
      title={() => <Text numberOfLines={3}>{item?.title}</Text>}
      description={() => (
        <Text numberOfLines={2} appearance="hint">
          {item?.description}
        </Text>
      )}
      accessoryLeft={() => (
        <AntDesign
          name="heart"
          size={28}
          color="rgb(255, 23, 68)"
          style={styles.icon}
          onPress={() => pressHandler(item)}
        />
      )}
      accessoryRight={() => (
        <Image source={{uri: item?.image}} style={styles.image} />
      )}
      onPress={() => goToDetails(item)}
    />
  );
  return news.length > 0 ? (
    <Layout style={styles.container}>
      <List
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </Layout>
  ) : (
    <Loading />
  );
};

export default ListOfNews;
