import {ImageBackground, Image, Text, View, FlatList} from 'react-native';
import styles from './styles';
import {Layout, List} from '@ui-kitten/components';
import {Card} from '@ui-kitten/components';
import imag1 from '../../../assets/images/good-good-good-wyN0QFDiXw0-unsplash.jpg';
import axios from 'axios';
import {useEffect, useState} from 'react';

const data = [
  {
    title: 'Title 1',
    description: 'Description 1',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
  {
    title: 'Title 2',
    description: 'Description 2',
    image: imag1,
  },
];
const TopNews = () => {
  const [topNews, setTopNews] = useState([]);
  const getAllData = async () => {
    const {data} = await axios.get(
      '    http://api.mediastack.com/v1/news?access_key=f37d82f2872d3f49a22f9e89724bb2b5&countries=eg&languages=ar',
    );

    setTopNews(data.data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <List
      data={topNews}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item?.id}
      renderItem={({item}) => (
        <Layout style={{paddingRight: 10, height: 600}}>
          <Card
            style={{
              width: 400,
              borderRadius: 8,
              overflow: 'hidden',
              padding: 0,
              margin: 0,
            }}>
            <ImageBackground
              style={styles.img}
              source={item.image ? {uri: item?.image} : imag1}>
              <Layout style={styles.whiteBox}>
                <Text numberOfLines={2} style={styles.redBox}>
                  {item?.title}
                </Text>
                <Text numberOfLines={3}>{item?.description}</Text>
              </Layout>
            </ImageBackground>
          </Card>
        </Layout>
      )}
    />
  );
};
export default TopNews;
