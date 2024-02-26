import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircularProgress, { CircularProgressBase } from "react-native-circular-progress-indicator"; // Import the circular progress library
import BatchDetails from "../component/BatchDetails";
import ButtonComponent from "../component/Button";
import Constants from "../utils/Constants";
import { userLogin } from "../context/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { setStringItem } from '../utils/Utils';

const Batches = () => {
  const dispatch=useDispatch();
  const userDetails=useSelector((state:any)=>state.userDetailsReducer.userid)
  function onPress(): void {
    setStringItem(Constants.IS_LOGIN,'false');
    dispatch(userLogin(false));
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Batches</Text>
      <View style={styles.cardContainer}>
      
     <BatchDetails></BatchDetails>
     {/* <Text> Hi {userDetails}</Text> */}
     <ButtonComponent text="Log out" onPress={onPress} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8518FF",
    height: "100%",
    flexDirection:"column"
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginTop: "15%",
    backgroundColor:"white",
    height : "100%",
    borderTopEndRadius : 30,
    borderTopStartRadius : 30,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: "12%",
  },
});

export default Batches;
