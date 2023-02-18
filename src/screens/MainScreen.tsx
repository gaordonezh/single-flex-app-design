import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Fab from '../components/Fab';
import {TabsEnum} from '../interfaces/enums';
import {
  EighthTab,
  FifthTab,
  FirstTab,
  FourthTab,
  NinethTab,
  SecondTab,
  SeventhTab,
  SixthTab,
  TenthTab,
  ThirdTab,
} from './TabsScreen';

const MainScreen = () => {
  const [tab, setTab] = useState<TabsEnum>(TabsEnum.FIRST);

  const handleChange = (action: 'next' | 'back') => {
    const arr = Object.values(TabsEnum);
    const index = arr.findIndex(item => item === tab);
    if (index >= 0) {
      const newTab = arr[index + (action === 'next' ? +1 : -1)];
      if (newTab || newTab === 0) setTab(newTab);
    }
  };

  const tabs = {
    [TabsEnum.FIRST]: <FirstTab />,
    [TabsEnum.SECOND]: <SecondTab />,
    [TabsEnum.THIRD]: <ThirdTab />,
    [TabsEnum.FOURTH]: <FourthTab />,
    [TabsEnum.FIFTH]: <FifthTab />,
    [TabsEnum.SIXTH]: <SixthTab />,
    [TabsEnum.SEVENTH]: <SeventhTab />,
    [TabsEnum.EIGHTH]: <EighthTab />,
    [TabsEnum.NINETH]: <NinethTab />,
    [TabsEnum.TENTH]: <TenthTab />,
  };

  return (
    <SafeAreaView style={styles.global}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {`${tab.toUpperCase()} POSITION DESIGN`}
        </Text>
      </View>
      <View style={styles.container}>{tabs[tab]}</View>
      <Fab
        label="BACK"
        onPress={() => handleChange('back')}
        position={{left: 25, bottom: 25}}
      />
      <Fab label="NEXT" onPress={() => handleChange('next')} />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  titleText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
  },
  container: {
    height: '100%',
    width: '100%',
    padding: 75,
  },
});
