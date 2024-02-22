import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  const handleNameChange = (text: React.SetStateAction<string>) => {
    setName(text);
  };

  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (text: React.SetStateAction<string>) => {
    setPhoneNumber(text);
  };

  const handleSubmit = () => {
    console.log('Nama: ', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text2}>
          Silahkan mengisi Form yang ada di bawah ini
        </Text>
        <Text style={styles.textInput}>Nama :</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nama anda"
          value={name}
          onChangeText={handleNameChange}
        />
        <Text style={styles.textInput}>Email :</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Text style={styles.textInput}>No. Hp :</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Nomor HP"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Kirim</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  scrollText: {
    textAlign: 'left',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 15,
  },

  textInput: {
    fontSize: 15,
  },

  text2: {
    fontSize: 16,
    marginBottom: 5,
  },

  button: {
    color: 'red',
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    width: 60,
    height: 25,
    borderColor: 'black',
  },

  textButton: {
    color: 'black',
    fontSize: 15,
  },
});

export default Registration;
