import {Icon} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 30,
    marginVertical: 0,
    resizeMode: 'contain',
    margin: 'auto',
    overflow: 'hidden',
  },

  text: {
    paddingHorizontal: 20,
    marginVertical: 7,
    fontFamily: 'Cairo-ExtraBold',
    textAlign: 'center',
  },
  button: {
    marginVertical: 0,
    textTransform: 'uppercase',
    width: '50%',
    margin: 'auto',
  },
});
export default styles;
