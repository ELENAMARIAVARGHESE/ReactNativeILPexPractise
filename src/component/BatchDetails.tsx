import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { getBatchDetails } from "../network/ApiHook";
import CircularProgress from "./CircularProgress";

type ItemProps = { id: string, batchName: string, traineeNo: string, date: string, completeStatus: number };

const BatchDetail = ({ id, batchName, traineeNo, date, completeStatus }: ItemProps) => (
  
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{batchName}</Text>
    <View style={styles.cardFooter}>
      <Text style={styles.traineeText} >Trainee  <Text style={styles.cardText}>{traineeNo}</Text> </Text>
      {/* <Text style={styles. cardTitle}>{completeStatus}</Text> */}
      <CircularProgress completeStatus={completeStatus}></CircularProgress>

    </View>

    <Text style={styles.cardText}>{date}</Text>
  </View>
);

const BatchDetails = () => {
  const [batchesList, setBatchList] = useState<any[]>([]);

  useEffect(() => {
    const getBatches = async () => {
      try {
        const { contentResp, errorMessage } = await getBatchDetails(
          'v1/da00dc65-0d04-4e6b-99c5-7599589f4f11',
        );
        setBatchList(contentResp);

      } catch (error) {
        console.error('Error:', error);
      }
    };
    getBatches();
  }, []);
  
  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={batchesList}
        renderItem={({ item }) => <BatchDetail id={item.id} batchName={item.batchName} traineeNo={item.traineeNo} date={item.date} completeStatus={item.completeStatus} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({

  card: {
    marginTop: '5%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  traineeText:{
    fontSize: 16,
    color: "black",
    fontWeight: "400",
    textAlign: "left", 
  },

  cardTitle: {
    fontSize: 18,
    color: "black",
    fontWeight: "600",
    marginBottom: 1,
    textAlign: "left",
  },
  cardText: {
    fontSize: 16,
    textAlign: "left",
    color: "#8F00FF",
    fontWeight: "600"
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
  },
});

export default BatchDetails;
