import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const FifthTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={[boxStyles.firstBox, styles.box]} />
    <View style={[boxStyles.secondBox, styles.box]} />
    <View style={[boxStyles.thirdBox, styles.box]} />
  </View>
);

export default FifthTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    height: 'auto',
  },
});
