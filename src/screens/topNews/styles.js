import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    height: 320,
  },
  card: {
    width: 400,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    height: 300,
  },
  img: {
    height: '100%',
    maxWidth: '100%',
    borderRadius: 18,
    overflow: 'hidden',
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
    position: 'relative',
  },
  whiteBox: {
    backgroundColor: 'rgba(161, 153, 153, 0.6))',
    width: '86%',
    maxHeight: '100%',
    position: 'absolute',
    borderRadius: 8,
    padding: 10,
    color: 'black',
    right: '7%',
    bottom: "10%",
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  redBox: {
    backgroundColor: 'rgba(138, 45, 45, 0.9))',
    borderRadius: 4,
    padding: 7,
    textAlign: 'end',
    alignSelf: 'flex-start',
    color: 'white',
  },
  icon: {

  },
  iconBox: {
    backgroundColor: 'rgb(252, 228, 236)',
    width: 50,
    height: 50,
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
});
export default styles;
