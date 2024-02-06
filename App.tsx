import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AllCoreComponents = () => {
  return (
    <View>
      <ScrollView style={styles.body}>
        <View style={styles.containerHead}>
          <Image
            source={{
              uri: 'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
            }}
            style={styles.imageHead}
          />
          <Text style={styles.text}>Gallery</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.greeting}>Image Gallery</Text>
          <Text style={styles.text3}>
            Kamu bisa melihat Foto-foto yang ada di dalam gallery ini
          </Text>
          <View style={styles.content}>
            <Image
              source={{
                uri: 'https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
              }}
              style={styles.image}
            />
            <Text style={styles.text2}>Static Random Image</Text>
          </View>
          <View style={styles.content}>
            <Image
              source={{
                uri: 'https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60',
              }}
              style={styles.image}
            />
            <Text style={styles.text2}>Grayscale</Text>
          </View>
          <View style={styles.content}>
            <Image
              source={{
                uri: 'https://fastly.picsum.photos/id/1060/536/354.jpg?blur=2&hmac=0zJLs1ar00sBbW5Ahd_4zA6pgZqCVavwuHToO6VtcYY',
              }}
              style={styles.image}
            />
            <Text style={styles.text2}>Blur</Text>
          </View>
          <View style={styles.content}>
            <Image
              source={{
                uri: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
              }}
              style={styles.image}
            />
            <Text style={styles.text2}>Advanced Usage</Text>
          </View>
          <Text style={styles.text4}>Beri kami tanggapan</Text>
          <TextInput
            placeholder="Masukan Tanggapan anda"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textTanggapan}>Kirim Tanggapan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#424040',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 15,
    color: '#dbd7d7',
  },
  imageHead: {
    width: 40,
    height: 40,
    marginBottom: 30,
    marginTop: 10,
    borderRadius: 100,
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#dbd7d7',
  },

  image: {
    width: 365,
    height: 200,
  },

  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },

  text2: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },

  text3: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center',
  },

  text4: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 50,
  },

  content: {
    marginTop: 20,
    backgroundColor: 'rgba(92, 92, 92, 0.25)',
    borderRadius: 7,
  },

  button: {
    color: 'red',
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
    borderRadius: 5,
    width: 150,
    height: 30,
    borderColor: 'black',
  },

  textTanggapan: {
    color: 'black',
    fontSize: 16,
    alignItems: 'center',
  },

  containerHead: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(92, 92, 92, 0.25)',
    paddingTop: 20,
    paddingLeft: 15,
    height: 70,
  },
});

export default AllCoreComponents;
