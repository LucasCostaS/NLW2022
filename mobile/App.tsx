import { StatusBar } from 'expo-status-bar';
import { ProgressViewIOSComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Oi, tudo Bem?

        
        </Text>

        <Button title="Me aperte!!!"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: String;
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 26
  }
});
