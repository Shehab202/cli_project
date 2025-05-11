import TopNews from '../topNews/TopNews';
import ListOfNews from '../listOfNews/ListOfNews';
import TopTitle from '../topTitle/TopTitle';
import {ScrollView} from 'react-native';
import Header from '../header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout} from '@ui-kitten/components';

const MainNews = () => {
  return (
    <>
      <Layout style={{flex: 1, paddingTop: 10}}>
      <Header />
        <ScrollView>
          <TopNews />
          <TopTitle />
          <ListOfNews />
        </ScrollView>
      </Layout>
    </>
  );
};
export default MainNews;
