import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const SecondTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={boxStyles.firstBox} />
    <View style={boxStyles.secondBox} />
    <View style={[boxStyles.thirdBox, styles.thirdBox]} />
  </View>
);

export default SecondTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  thirdBox: {
    width: '100%',
  },
});
