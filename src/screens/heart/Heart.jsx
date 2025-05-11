import {Image, View} from 'react-native';
import React from 'react';
import {Button, Card, Layout, List, Text} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {removeAllFavorite, removeFromFavorite} from '../../store/FavoriteSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../header/Header';
import Toast from 'react-native-toast-message';
import TopNavigation from '../../back/Back';

const Heart = () => {
  const dispatch = useDispatch();
  const emptyFavorite = () => (
    <>
      <Header />
      <TopNavigation />
      <Layout style={styles.layoutEmpty}>
        <Text category="h4" status="warning" style={styles.emptyFavorite}>
          No favorite news
        </Text>
        <Button style={styles.button} appearance="outline" onPress={goBack}>
          go back
        </Button>
      </Layout>
    </>
  );
  const removeHandler = () => {
    dispatch(removeAllFavorite());
    Toast.show({
      type: 'info',
      text1: 'Deleted all Favorites',
    });
  };
  const pressHandler = item => {
    dispatch(removeFromFavorite(item));
    Toast.show({
      type: 'info',
      text1: 'Deleted from Favorites',
    });
  };
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const goToDetails = item => {
    navigation.navigate('details', {item});
  };
  const {favorites} = useSelector(state => state.favoriteSlice);
  const renderItem = ({item}) => {
    return (
      <>
        <Layout style={styles.container}>
          <Card style={styles.card}>
            <Image style={styles.image} source={{uri: item?.image}} />
            <Text category="h5" style={styles.textStyle}>
              {item?.title}
            </Text>
            <Text appearance="hint" numberOfLines={4} style={styles.textStyle}>
              {item?.description}
            </Text>
            <View style={styles.buttonContainer}>
              <View>
                <AntDesign
                  name="delete"
                  size={35}
                  color="red"
                  style={styles.icon}
                  onPress={() => pressHandler(item)}
                />
              </View>
              <View>
                <Button
                  style={styles.button}
                  appearance="outline"
                  onPress={() => goToDetails(item)}>
                  show details
                </Button>
              </View>
            </View>
          </Card>
        </Layout>
      </>
    );
  };

  return favorites.length === 0 ? (
    emptyFavorite()
  ) : (
    <SafeAreaView
      style={styles.padd}>

      <TopNavigation />

      <Layout>
        <Button
          style={styles.removeButton}
          appearance="outline"
          status="danger"
          onPress={() => removeHandler()}>
          <Text> remove all</Text>
        </Button>
      </Layout>

      <List
        data={favorites}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

export default Heart;
