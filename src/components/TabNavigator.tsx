import { useWindowDimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { JSX, useState } from 'react';
import { colors } from '@/tokens/colors';

interface TopTabNavigatorProps {
  renderDetails: () => JSX.Element;
  renderNotes: () => JSX.Element;
}

export default function TopTabNavigator({ renderDetails, renderNotes }: TopTabNavigatorProps) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'details', title: 'Details' },
    { key: 'notes', title: 'Notes' },
  ];

  const renderScene = SceneMap({
    details: renderDetails,
    notes: renderNotes,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.primary }}
      style={{ backgroundColor: 'white' }}
      activeColor={colors.primary}
      inactiveColor={colors.primary}
      renderLabel={({ route, focused, color }) => <Text>{route.title}</Text>}
      scrollEnabled={false}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      swipeEnabled={true}
      lazy={true}
      overScrollMode={'never'}
    />
  );
}
