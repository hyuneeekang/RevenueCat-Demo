import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Purchases from 'react-native-purchases';

const API_KEY = 'goog_QgUhlPMtfQQKgZyeIanwnGtHkID';

export default function App() {
  useEffect(() => {
    // RevenueCat SDK 초기화
    Purchases.configure({ apiKey: API_KEY });
    console.log('RevenueCat initialized!');
  }, []);

  const handleCheckProducts = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      console.log('Offerings:', offerings);
      if (offerings.current !== null) {
        console.log('Available products:', offerings.current.availablePackages);
      }
    } catch (e) {
      console.error('Error fetching offerings:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RevenueCat Demo</Text>
      <Button title="Check Products" onPress={handleCheckProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});