import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import {Card} from '@ui-kitten/components';
import {Button} from '@ui-kitten/components';
import image1 from '../../../assets/images/good-good-good-wyN0QFDiXw0-unsplash.jpg';
import {Image} from 'react-native';
import styles from './styles';
import axios from 'axios';

const ListOfNews = () => {
  const [news, setNews] = useState([]);
  const getAllData = async () => {
    const {data} = await axios(
      'http://api.mediastack.com/v1/news?access_key=f37d82f2872d3f49a22f9e89724bb2b5&countries=eg&languages=ar',
    );

    setNews(data.data);
  };
  useEffect(() => {
    getAllData();
    console.log(news);
  }, []);

  const renderItem = ({item}) => (
    <ListItem
      style={styles.listStyle}
      title={() => <Text numberOfLines={3}>{item?.title}</Text>}
      description={() => (
        <Text numberOfLines={2} appearance="hint">
          {item?.description}
        </Text>
      )}
      accessoryRight={() => (
        <Image source={{uri: item?.image}} style={styles.image} />
      )}
    />
  );
  return (
    <>
      <List
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </>
  );
};
export default ListOfNews;
