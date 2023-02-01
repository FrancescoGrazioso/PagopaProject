import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { CardProps } from '../../interfaces/cardIntercafe';
import { cardStyle } from './style';

export default class Card extends Component<CardProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {image, title} = this.props;
    return (
      <View style={cardStyle.cardContainer}>
        <View style={cardStyle.imageContainer}>
          <Image borderRadius={12} source={{uri: image}} style={cardStyle.image} />
        </View>
        <View style={cardStyle.titleContainer}>
          <Text style={cardStyle.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

