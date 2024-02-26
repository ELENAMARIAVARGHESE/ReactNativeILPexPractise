import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { FlatList } from "react-native";
import Card from "../component/TraineeCard";
import { getBatchDetails } from "../network/ApiHook";
 
const Trainees =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trainees</Text>
            <View style={styles.box}>
                <TextInput
                    style={styles.search}
                    placeholder="Search..."
                />
                <CardDisplay></CardDisplay>
            </View>
        </View>
    )
};
 
const CardDisplay =()=>{
    const [traineeList, setAssessmentList] = useState<any[]>([]);

    useEffect(() => {
      const getTrainees= async () => {
        try {
          const {contentResp, errorMessage} = await getBatchDetails(
            'v1/5ca8e6bf-051c-4c2f-8f51-c9832cdbc2ca',
          );
          setAssessmentList(contentResp);
        
        } catch (error) {
          console.error('Error:', error);
        }
      };
      getTrainees();
    }, []);
    return (
        <View style = {styles.dataContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={traineeList}
            renderItem={({ item }) => <Card name={item.name} batchName={item.batchName} imageUrl={item.imageUrl}/>}
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
        fontSize:30,
        fontWeight:"bold",
        color: "white",
    },
    text:{
        textAlign:'center',
        fontSize:50,
        fontWeight:"bold",
        color: "white",
        marginTop: "15%"
    },
    box :{
        backgroundColor:"white",
        height : "100%",
        marginTop: '10%',
        borderTopEndRadius : 30,
        borderTopStartRadius : 30
    },
    search: {
        marginTop:40,
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        height: 50,
        borderColor: '#E4D8FE',
        backgroundColor:'#E4D8FE',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 8,
      },
});
 
export default Trainees;