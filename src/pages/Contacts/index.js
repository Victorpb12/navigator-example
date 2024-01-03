import { View, Text, StyleSheet } from 'react-native';

export default function Contacts({navigation}) {
  return (
    <View style={{marginTop: 20, marginLeft: 15}}>
      <View>
        <Text style={styles.ContactTitle}>Nome: Victor</Text>
        <Text style={styles.ContactInformation}>Telefone: (49) 92000-9999</Text>
        <Text
          style={styles.Informations}
          onPress={() => navigation.navigate('Information', 
          {
            nome: 'Victor',
            telefone: '(49) 92000-9999',
            profissão: 'Programador',
            cidade: 'Concórdia',
          })}>
          Informações...
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.ContactTitle}>Nome: João</Text>
        <Text style={styles.ContactInformation}>Telefone: (49) 92000-1234</Text>
        <Text
          style={styles.Informations}
          onPress={() => navigation.navigate('Information', {
            nome: 'João',
            telefone: '(49) 92000-1234',
            profissão: 'Cozinheiro',
            cidade: 'Pato Branco',
          })}>
          Informações...
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.ContactTitle}>Nome: Maria</Text>
        <Text style={styles.ContactInformation}>Telefone: (49) 92000-7999</Text>
        <Text
          style={styles.Informations}
          onPress={() => navigation.navigate('Information', {
            nome: 'Maria',
            telefone: '(49) 92000-7999',
            profissão: 'Bailarina',
            cidade: 'Concórdia',
          })}>
          Informações...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ContactInformation: {
    fontSize: 15,
  },
  Informations : {
    color: 'blue',
    fontSize: 16,
  },
});