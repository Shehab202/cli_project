import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex:1 ,
    alignItems: 'center',
  },
  layoutEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 100,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  textStyle: {
    marginVertical: 5,
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
    textTransform: 'uppercase',
    width: '80%',
    margin: 'auto',
  },
  emptyFavorite: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  removeButton: {
    marginTop: 10,
    width: '50%',
    margin: 'auto',
    marginBottom: 10,
  },padd:{
    
        paddingBottom: 100,
      
  }
});
export default styles;
