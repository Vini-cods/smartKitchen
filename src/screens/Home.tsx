import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const alturaStatusBar = StatusBar.currentHeight ?? 0;

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={estilos.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="#f1f1f1" />
      
      <Text style={estilos.header}>Cozinha Fácil 🍽️</Text>

      <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('CafeDaManha')}>
        <Text style={estilos.buttonText}>Sugestão de Café da Manhã</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('Drinks')}>
        <Text style={estilos.buttonText}>Sugestão de Drinks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.button} onPress={() => navigation.navigate('Sobremesas')}>
        <Text style={estilos.buttonText}>Sugestão de Sobremesas</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? alturaStatusBar : 54,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
