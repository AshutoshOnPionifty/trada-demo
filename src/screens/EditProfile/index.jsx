import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, Pressable, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';


const UselessTextInput = () => {
  const [text1, onChangeUserName] = React.useState("Udayanandan Rao");
  const [text2, onChangeEmail] = React.useState("uday@gmail.com");
  const [text3, onChangeContact] = React.useState("0987654321");
  const [text4, onChangeProfileImg] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled){
      setImage(result.uri);
    }
  };

  if (hasGalleryPermission === false){
    return <Text>No access to Internal Storage</Text>
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={text1}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={text2}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeContact}
        value={text3}
      />

      <Pressable style={{flex:1, justifyContent: 'center', width: 150, marginLeft: 110, marginTop:20}}>
        <Button title='Upload Image' onPress={() => pickImage()} style={{marginTop:30}} />
        {image && <Image source={{uri: image}} style={{flex:1/2}} />}
      </Pressable>

       {/* <TextInput
        style={styles.input}
        onChangeText={onChangeProfileImg}
        value={text4}
      /> */}

      <Pressable style={styles.btn} onPress={() => navigation.navigate("")}>
        <Text style={styles.save}>Save</Text>
      </Pressable>      
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderColor: 'gray',    
  },
  mainContainer: {
    marginTop: 15
  },
  btn: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 240,    
  },
  save: {
    backgroundColor: '#3B71F3',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff'
  }
});

export default UselessTextInput;