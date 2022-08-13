import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, Pressable } from "react-native";

const UselessTextInput = () => {
  const [text1, onChangeBankName] = React.useState("Bank Name");
  const [text2, onChangeBranchName] = React.useState("Branch Name");
  const [text3, onChangeIFSCCODE] = React.useState("IFSC CODE");
  const [text4, onChangeAccountNumber] = React.useState("Account Number");
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeBankName}
        value={text1}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeBranchName}
        value={text2}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeIFSCCODE}
        value={text3}
      />

       <TextInput
        style={styles.input}
        onChangeText={onChangeAccountNumber}
        value={text4}
      />

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
    marginTop: 10,    
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