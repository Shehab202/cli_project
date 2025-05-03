import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    height: 250,
    width: '100%',
    position: 'relative',
    borderRadius: 18,
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
  },
  whiteBox: {
    backgroundColor: 'rgba(161, 153, 153, 0.7))',
    width: '86%',
    maxHeight: '100%',
    position: 'absolute',
    borderRadius: 8,
    padding: 10,
    color: 'black',
    left: -30,
    top: '60%',
    textAlign: 'center',
    margin: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-end',
    transform: [{translateX: -50}, {translateY: -50}],
  },
  redBox: {
    backgroundColor: 'rgba(138, 45, 45, 0.9))',
    borderRadius: 4,
    padding: 7,
    textAlign: 'end',
    alignSelf: 'flex-start',
    color: 'white',
  },
});
export default styles;
