import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const EighthTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={boxStyles.firstBox} />
    <View style={[boxStyles.secondBox, styles.secondBox]} />
    <View style={boxStyles.thirdBox} />
  </View>
);

export default EighthTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  secondBox: {
    left: 100,
  },
});
