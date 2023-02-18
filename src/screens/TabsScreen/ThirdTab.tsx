import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const ThirdTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={[boxStyles.firstBox, styles.firstBox]} />
    <View style={[boxStyles.secondBox, styles.secondBox]} />
    <View style={[boxStyles.thirdBox, styles.thirdBox]} />
  </View>
);

export default ThirdTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  firstBox: {
    alignSelf: 'flex-end',
  },
  secondBox: {
    alignSelf: 'flex-start',
  },
  thirdBox: {
    alignSelf: 'center',
  },
});
