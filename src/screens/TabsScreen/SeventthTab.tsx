import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const SeventhTab = () => (
  <View style={[boxStyles.container, styles.container]}>
    <View style={boxStyles.firstBox} />
    <View style={boxStyles.secondBox} />
    <View style={boxStyles.thirdBox} />
  </View>
);

export default SeventhTab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
