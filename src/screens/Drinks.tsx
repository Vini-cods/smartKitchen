import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

const KEY_GEMINI = ''; // Substitua pela sua chave
const genAI = new GoogleGenerativeAI(KEY_GEMINI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const generationConfig = { temperature: 1, topP: 0.95, topK: 64, maxOutputTokens: 500, responseMimeType: "text/plain" };

export default function Drinks() {
  const [ingrediente1, setIngrediente1] = useState('');
  const [ingrediente2, setIngrediente2] = useState('');
  const [ingrediente3, setIngrediente3] = useState('');
  const [sugestao, setSugestao] = useState('');
  const [load, setLoad] = useState(false);

  async function gerarSugestao() {
    if (ingrediente1 === "" || ingrediente2 === "" || ingrediente3 === "") {
      alert('Informe os ingredientes!');
      return;
    }
    setSugestao('');
    setLoad(true);
    Keyboard.dismiss();

    const prompt = `Crie uma receita de drink especial usando os ingredientes: ${ingrediente1}, ${ingrediente2} e ${ingrediente3}. Dê um nome para o drink!`;

    try {
      const chatSession = model.startChat({ generationConfig, history: [] });
      const result = await chatSession.sendMessage(prompt);
      setSugestao(result.response.text());
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>Drinks Especiais 🍹</Text>
      <TextInput style={estilos.input} placeholder="Ingrediente 1" value={ingrediente1} onChangeText={setIngrediente1} />
      <TextInput style={estilos.input} placeholder="Ingrediente 2" value={ingrediente2} onChangeText={setIngrediente2} />
      <TextInput style={estilos.input} placeholder="Ingrediente 3" value={ingrediente3} onChangeText={setIngrediente3} />

      <TouchableOpacity style={estilos.button} onPress={gerarSugestao}>
        <Text style={estilos.buttonText}>Gerar Drink</Text>
      </TouchableOpacity>

      <ScrollView style={{ marginTop: 20 }}>
        {load && <ActivityIndicator size="large" color="#000" />}
        {sugestao && <Text style={estilos.texto}>{sugestao}</Text>}
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6 },
  button: { backgroundColor: '#17a2b8', padding: 14, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
  texto: { marginTop: 20, fontSize: 16, lineHeight: 24 },
});
