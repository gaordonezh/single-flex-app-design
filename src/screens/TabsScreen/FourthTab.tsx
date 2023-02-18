import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const FourthTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={[boxStyles.firstBox, styles.firstBox]} />
    <View style={[boxStyles.secondBox, styles.secondBox]} />
    <View style={[boxStyles.thirdBox, styles.thirdBox]} />
  </View>
);

export default FourthTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  firstBox: {
    alignSelf: 'flex-end',
  },
  secondBox: {
    alignSelf: 'center',
  },
  thirdBox: {
    alignSelf: 'flex-start',
  },
});
