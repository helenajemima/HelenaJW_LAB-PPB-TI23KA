import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Myfriend from './components/Friends/Myfriend';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
        <Myfriend/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
