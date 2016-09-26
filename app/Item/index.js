import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Item extends Component {
  render() {
    const { title, author, production, date, desc, source } = this.props.movie;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Image source={source} style={styles.image} />
        <View>
          <View style={styles.line}>
            <Text style={styles.label}>Title</Text>
            <Text style={styles.desc}>{title}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.label}>Author</Text>
            <Text style={styles.desc}>{author}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.label}>Production</Text>
            <Text style={styles.desc}>{production}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.label}>Published</Text>
            <Text style={styles.desc}>{date}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  line: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  label: {
    width: 120,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10
  },
  desc: {
    width: 200,
    fontSize: 16,
    color: '#333333',
  },
  image: {
    width: 120,
    height: 120,
    margin: 10,
    padding: 5,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 3
  }
});

export default Item;
