import React,{useState} from "react";
import {KeyBoardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyBoard, ScrollView, Button} from "react-native";
import Task from "./components/Task";

export default function App(){
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = ()=> {
        keyboard.dismiss();
        setTaskItems([...taskItems,task]) 
        setTask(null);
    }
    const completeTask = (index)=> {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy)
    }

    return(
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}

            keyboardShouldPersistTaps='handled'
            >
                <View style={styles.textWrapper}>

                <Text style={styles.title}>
                  
         Todo <Text style = {{fontWeight:"300",color :"#24A6D9"}}> Lists </Text>
         </Text>

        <View>
            <Text style={{paddingLeft:50, color:"#ffffff"}}>Click On The Task To Delete</Text>
        </View>
            <View style={styles.items}>
                {
                taskItems.map((item, index) => {
                    return(
                        <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
                            <Task text={item}/>

                        </TouchableOpacity>
                    )
                })
            }
            </View>
        
                </View>

                
            </ScrollView>
            <KeyBoardAvoidingView
            style={styles.writetaskwrapper}
>

<TextInput style={styles.input} placeholder={'Write any task'} value={task} onChangeText={text => setTask(text)} />

<TouchableOpacity onPress = {()=> handleAddTask}></TouchableOpacity>
<View style = {styles.addWrapper}>
    <Text style={styles.addText}></Text>

    
</View>
    
</KeyBoardAvoidingView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#181818"
    },
    taskwrapper: {
        paddingTop: 50,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 40,
        fontWeight: "800",
        color:"#ffffff",
        paddingHorizontal: 45,
    },
    writetaskwrapper: {
        postition: 'absolute',
        bottom:10,
        width:100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 60,
        borderColor: "black",
    },
    addWrapper:{
        weight:60,
        height:60,
        backgroundColor:'#ffffff',
        borderRadius:60,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#ffffff'
    }
})