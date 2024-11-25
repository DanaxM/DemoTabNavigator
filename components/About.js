import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Demostración de navegación por pestañas</Text>
      <Text style={styles.text}>Dana Carolina Moreno Jiménez</Text>
      <Text style={styles.text}>21470089@campeche.tecnm.mx</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});
