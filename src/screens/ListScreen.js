import React, {Component}   from 'react';
import {Text, View, FlatList} from 'react-native';
 
class ListScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {name: "hallo", },
                {name: "hallo 2"},
                {name: "hallo 3"},
            ]
        }

    }
    render(){
        return(
            <View>
                <Text> List Screen  </Text>
                <FlatList 
                    keyExtractor={friend => friend.name}
                    data={this.state.data} 
                    renderItem={({item}) => {
                        return <Text>{item.name}</Text>
                    }} 
                />
            </View>
        );
    }
}
 
 
export default ListScreen ;