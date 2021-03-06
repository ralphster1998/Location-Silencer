import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-material-ui';
import { connect } from 'react-redux';
import ExerciseItem from './ExerciseItem';
import ExerciseDetail from './ExerciseDetail';
import { loadInitialExercises } from '../actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 390,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});

class ExerciseList extends Component {
    // just before component mounts
    componentWillMount() {
        this.props.loadInitialExercises();
    }
    renderInitialView() {
        if(this.props.detailView === true) { // this is from the reducer detailView
            return (
                <ExerciseDetail />
            )
        } else {
            return (
                <FlatList
                    data={this.props.exercise}
                    renderItem={({item}) => <ExerciseItem exercise={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    {this.renderInitialView()}
                </Card>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        exercise: state.exercise,
        detailView: state.detailView // you want to pass in the detail view info as well. 
    }
}

export default connect(mapStateToProps, { loadInitialExercises })(ExerciseList);
