import {Divider, Layout, Text} from '@ui-kitten/components';
import styles from './styles';
// import { TopNavigation } from '../../back/Back';


const TopTitle = () => {

  return (
    <Layout>
      <Text
        category="h5"
        status="danger"
        style={styles.title}
        >
       Arab news
      </Text>
      <Divider />
    </Layout>
  );
};

export default TopTitle;
