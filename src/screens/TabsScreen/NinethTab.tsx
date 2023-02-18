import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const NinethTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={[boxStyles.firstBox, styles.firstBox]} />
    <View style={[boxStyles.secondBox, styles.secondBox]} />
    <View style={[boxStyles.thirdBox]} />
  </View>
);

export default NinethTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  firstBox: {
    top: 100,
  },
  secondBox: {
    left: 100,
  },
});
