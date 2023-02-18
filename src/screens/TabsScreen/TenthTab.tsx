import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const TenthTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={boxStyles.firstBox} />
    <View style={[boxStyles.secondBox, styles.secondBox]} />
    <View style={boxStyles.thirdBox} />
  </View>
);

export default TenthTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondBox: {
    top: 50,
  },
});
