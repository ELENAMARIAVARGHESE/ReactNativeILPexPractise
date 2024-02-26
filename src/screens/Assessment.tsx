import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import CardAssessment from "../component/AssessmentCard";
import { getBatchDetails } from "../network/ApiHook";
 

const Assessments = ()=>{
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Assessments</Text>
            <View style={styles.box}>
                <CardDisplay></CardDisplay>
            </View>
        </View>
    )
};
 
const CardDisplay =()=>{
    const [assessmentList, setAssessmentList] = useState<any[]>([]);

    useEffect(() => {
      const getAssessments= async () => {
        try {
          const {contentResp, errorMessage} = await getBatchDetails(
            'v1/8ec4c825-a796-4bf4-9841-9c27cb7bba9b',
          );
          setAssessmentList(contentResp);
        
        } catch (error) {
          console.error('Error:', error);
        }
      };
      getAssessments();
    }, []);
    return (
        <View style = {styles.dataContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={assessmentList}
            renderItem={({ item }) => <CardAssessment name={item.name} batchName={item.batchName} />}
            keyExtractor={item => item.id}
          />
        </View>
      );
}
 
 
 
const styles = StyleSheet.create({
    dataContainer : {
        margin : '10%',
    },
    container :{
        backgroundColor:"#8518FF",
        height : '100%',
    },
    text:{
        textAlign:'center',
        fontSize:50,
        fontWeight:"bold",
        color: "white",
        marginTop:"15%"
    },
    box :{
        backgroundColor:"white",
        height : "100%",
        marginTop: '10%',
        borderTopEndRadius : 30,
        borderTopStartRadius : 30
    }
});
 
export default Assessments;