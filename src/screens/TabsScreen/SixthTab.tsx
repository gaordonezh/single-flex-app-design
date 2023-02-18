import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const SixthTab = () => (
  <View style={boxStyles.container}>
    <View style={[boxStyles.firstBox, styles.firstBox]} />
    <View style={[boxStyles.secondBox, styles.secondBox]} />
    <View style={[boxStyles.thirdBox, styles.thirdBox]} />
  </View>
);

export default SixthTab;

const styles = StyleSheet.create({
  firstBox: {
    flex: 1,
    width: '100%',
  },
  secondBox: {
    flex: 1,
    width: '100%',
  },
  thirdBox: {
    flex: 2,
    width: '100%',
  },
});
