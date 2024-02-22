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
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (text: React.SetStateAction<string>) => {
    setName(text);
  };

  const handleEmailChange = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (text: React.SetStateAction<string>) => {
    setPhoneNumber(text);
  };

  const handleUsernameChange = (text: React.SetStateAction<string>) => {
    setUsername(text);
  };

  const handleAddressChange = (text: React.SetStateAction<string>) => {
    setAddress(text);
  };

  const handleSubmit = () => {
    console.log('Nama: ', name);
    console.log('Username: ', username);
    console.log('Email:', email);
    console.log('Address: ', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text2}>
          Registration
        </Text>
        <Text style={styles.textInput}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nama anda"
          value={name}
          onChangeText={handleNameChange}
        />
        <Text style={styles.textInput}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nama anda"
          value={name}
          onChangeText={handleUsernameChange}
        />
        <Text style={styles.textInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />
        <Text style={styles.textInput}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan nama anda"
          value={address}
          onChangeText={handleAddressChange}
        />
        <Text style={styles.textInput}>Phone Number</Text>
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
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
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
    color: 'black',
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
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
