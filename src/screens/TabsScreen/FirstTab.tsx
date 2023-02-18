import {StyleSheet, View} from 'react-native';
import boxStyles from './styles';

const FirstTab = () => (
  <View style={boxStyles.container}>
    <View style={boxStyles.firstBox} />
    <View style={[boxStyles.secondBox, styles.secondBox]} />
    <View style={boxStyles.thirdBox} />
  </View>
);

export default FirstTab;

const styles = StyleSheet.create({
  secondBox: {
    height: 'auto',
    flex: 1,
  },
});
