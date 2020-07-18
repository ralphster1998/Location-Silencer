import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
});

const ExerciseItem = (props) => {
    return (
        <View style={ styles.card }>
            <Image 
                source={require('../images/background.jpg')}
                style={ styles.image }
            />
            <AntDesign
                name={'user'}
                size={100}
                style={styles.icon}
            />
            <Text style={ styles.title }>{props.exercise.exerciseName}</Text>
            <Text style={ styles.action }>{props.exercise.url}</Text>
        </View>
    )
}

export default connect(null, actions)(ExerciseItem);