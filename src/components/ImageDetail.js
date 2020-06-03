import React, {Component}   from 'react';
import {Text, View, Image} from 'react-native';
 
 
 
class ImageDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
            <View>
                <Image source={this.props.imageSource}/>
                <Text>{this.props.title}</Text>
                <Text>Image Score - {this.props.score}</Text>
            </View>
        );
    }
}
 
 
export default ImageDetail;