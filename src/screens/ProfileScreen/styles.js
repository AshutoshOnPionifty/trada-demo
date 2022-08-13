import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    UserName: {
        color: 'white',
        // marginHorizontal: 10,
        fontSize: 22,
        alignSelf: 'center'
    },
    profile_pic: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginHorizontal: 20,
    },  
    TopHeading : {
        flexDirection: 'row',
    },
    item : {
        color: 'white'
    },
    fundTitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 40
    },
    fundInfo: {
        color: 'white',
        fontSize: 30,
        marginLeft: 20
    },    
    // BottomDesign: {
    //     backgroundColor: '#333',
    //     height: '250%',
    //     marginTop: 20,
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    // },
    // buttonSection: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 15,
    // },
    // button: {
    //     marginTop: 30,
    //     marginHorizontal: 50, 
    // },  

    // ***************************
    BottomDesign: {
        backgroundColor: '#333',
        height: '250%',
        marginTop: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    BottomRow: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 15
    },
    BottomText: {
        marginLeft: 20,
        color: 'white'
    },
   
    
    // balanceInfo: {
    //     color: 'white',
    //     width: '50%',
    //     fontSize: 20
    // },
    // balanceContainer: {
    //     height: 100,
    //     width: 300,
    //     backgroundColor: '#333',
    //     alignSelf: 'center',
    //     marginTop: 40,
    //     borderRadius: 10
    // }
});

export default styles;

