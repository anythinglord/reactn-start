import React, {Component}   from 'react';
import {Text, View} from 'react-native';
import ImageDetail from '../components/ImageDetail'
 
 
class ImageScreen extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
 
 
    render(){
        return(
           <View>
                <ImageDetail 
                    title="forest" 
                    imageSource={require('../../assets/forest.jpg')}
                    score={7}/>
                <ImageDetail 
                    title="beach" 
                    imageSource={require('../../assets/beach.jpg')}
                    score={8}/>
                <ImageDetail 
                    title="mountain" 
                    imageSource={require('../../assets/mountain.jpg')}
                    score={9}/>
           </View>
        );
    }
}
 
 
export default ImageScreen ;