import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {CardProps} from '../../interfaces/cardIntercafe';
import {cardStyle} from './style';

/**

Card component is responsible for showing the repository stargazers in a card view format

Props required for this component:
@param {string} image - stargazer's avatar image URL
@param {string} title - stargazer's username

render() function is used to return the UI of the component, which consist of:
  Card container - main container which consist of two inner container.
  Image container - contains repository owner's avatar image.
  Title container - contains repository name text.
*/
export default class Card extends Component<CardProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {image, title} = this.props;
    return (
      <View style={cardStyle.cardContainer}>
        <View style={cardStyle.imageContainer}>
          <Image
            borderRadius={12}
            source={{uri: image}}
            style={cardStyle.image}
          />
        </View>
        <View style={cardStyle.titleContainer}>
          <Text style={cardStyle.title}>{title}</Text>
        </View>
      </View>
    );
  }
}
