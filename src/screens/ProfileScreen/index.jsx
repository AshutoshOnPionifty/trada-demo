import React from 'react';
import  { View, Text, Image, Pressable } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Entypo, Feather } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";


// "#ea3943" : "#16c784"

const ProfileScreen = () => {

  const navigation = useNavigation();
    return (
        <View>
          <View style={styles.TopHeading}>
           <Image style={styles.profile_pic} source={require("../../../assets/profile.jpg")} />
           <Text style={styles.UserName} >Mr. Udayanandan Rao</Text>
          </View>

          {/* <View style={styles.balanceContainer}>
            <Text style={styles.balanceInfo} >Available Funds</Text>
          </View> */}

          <View>
            <Text style={styles.fundTitle} >Available Funds</Text>
            <Text style={styles.fundInfo} >₹ 10,50,000.15 /-</Text>
          </View>

          {/* <View style={styles.BottomDesign}>
            <View style={styles.buttonSection}>
              <View style={styles.button}>
                 <Button title='Add Fund'/>
              </View>
              <View style={styles.button}>
                 <Button title='Withdraw'/>
              </View>
            </View>
          </View> */}

          <View style={styles.BottomDesign}>
            <View style={styles.BottomView}>
            <Pressable onPress={() => navigation.navigate("EditProfile")}>
              <View style={styles.BottomRow}>
              <FontAwesome5 name="user-edit" size={20} color="white" />
                <Text style={styles.BottomText}>Edit Profile</Text>
              </View>
            </Pressable>

             <Pressable onPress={() => navigation.navigate("TransactionsScreen")}>
              <View style={styles.BottomRow}>
              <FontAwesome5 name="money-bill-wave" size={20} color="white" />
                <Text style={styles.BottomText}>Transactions</Text>
              </View>
              </Pressable>

              <Pressable onPress={() => navigation.navigate("BankDetails")}>
              <View style={styles.BottomRow}>
              <MaterialCommunityIcons name="bank" size={20} color="white" />
                <Text style={styles.BottomText}>Bank details</Text>
              </View>
              </Pressable>

              <Pressable onPress={() => navigation.navigate("HelpScreen")}>
              <View style={styles.BottomRow}>
              <AntDesign name="questioncircle" size={20} color="white" />
               <Text style={styles.BottomText}>Help</Text>
              </View>
              </Pressable>

              <Pressable onPress={() => navigation.navigate("AboutUs")}>
              <View style={styles.BottomRow}>              
              <Entypo name="info" size={20} color="white" />
                <Text style={styles.BottomText}>About Us</Text>
              </View>
              </Pressable>

              <Pressable>
              <View style={styles.BottomRow}>
              <Feather name="power" size={20} color="white" />
                <Text style={styles.BottomText}>Logout</Text>
              </View>  
              </Pressable>            
            </View>
          </View>         

      {/* ************************************************************** */}

        </View>        
    );
};


export default ProfileScreen;

