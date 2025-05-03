import {Divider, Layout, Text} from '@ui-kitten/components';
import styles from './styles';
// import {Text} from 'react-native';

const TopTitle = () => {
  return (
    <Layout>
      <Text category='h5'    status='danger' style={styles.title}>top news</Text>
      <Divider />
    </Layout>
  );
};

export default TopTitle;
