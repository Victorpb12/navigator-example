import { View, Text, StyleSheet } from 'react-native';

export default function Information({ route }) {
  return (
    <View style={{marginTop: 20, marginLeft: 15}}>
      <Text style={styles.ContactTitle}>
        Nome: {route.params?.nome}
      </Text>
      <Text style={styles.ContactTitle}>
        Profissão: {route.params?.profissão}
      </Text>
      <Text style={styles.ContactTitle}>
        Cidade: {route.params?.cidade}
      </Text>
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
});