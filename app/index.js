import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Item from './Item';

class AwesomeProject extends Component {
  constructor(){
    super();
    this.state = {
      selectedItem: null,
      movies: [
        {
          title: 'Limitless',
          author: 'Richard Martin',
          production: 'Universal Studio',
          date: new Date('2014-12-20').toDateString(),
          desc: 'Limitless is a movie published on Dec 2014, produced by Universal Studio. It was about a man who was in hopeless situation in his life before getting a miracle pill from his cousin.',
          source: require('./images/movie1.jpg')
        },
        {
          title: 'Shadow Cabal',
          author: 'Tom Ridle',
          production: '20th Fox Century',
          date: new Date('2015-11-17').toDateString(),
          desc: 'Shadow Cabal is a movie published on Nov 2015, produced by 20th Fox Century. A fantasy movie about magic and wizard, orch world threatening to a humanity. A girl who was born from a village started a revolution when her mother was died in a battle of orach.',
          source: require('./images/movie2.jpg')
        },
        {
          title: 'Grown Ups 2',
          author: 'David Thomson',
          production: 'Wall Disney',
          date: new Date('2013-07-14').toDateString(),
          desc: 'Grown Ups 2 is a fancy movie published on July 2013, produced by Wall Disney. Adam Sandler, Kevin James, Chris Rock, David Spade are participated as colleage students living at a doom in CA, and is about a trip they went on a spring holiday.',
          source: require('./images/movie3.jpg')
        }
      ]
    }
  }
  renderItem(item, index){
    return (
      <TouchableOpacity key={index} style={styles.line} onPress={()=>this.setState({selectedItem: item})}>
        <View style={styles.imageView}>
          <Image source={item.source} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.author}</Text>
          <Text style={styles.desc}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderSelectedItem(){
    return (
      <ScrollView>
        <TouchableOpacity style={styles.backButton} onPress={()=>this.setState({selectedItem: null})}>
          <Text>{"<< "}Back</Text>
        </TouchableOpacity>
        <Item movie={this.state.selectedItem} />
      </ScrollView>
    )
  }
  render() {
    if(this.state.selectedItem) return this.renderSelectedItem();
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.movies.map(this.renderItem.bind(this))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 3,
    backgroundColor: '#eee'
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 14,
    color: 'purple',
    textAlign: 'center',
    marginVertical: 5,
  },
  desc: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageView: {
    margin: 3,
    padding: 2,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 3
  },
  image: {
    width: 60,
    height: 60,
  },
  backButton: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    alignSelf: 'flex-start'
  }
});

export default AwesomeProject;
