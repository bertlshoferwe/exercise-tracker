import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ExercisesList extends Component {
    constructor(props) {
        super(props)
            this.state={
                exercises:[] 
            }

            this.deleteExercise = this.deleteExercise.bind(this)
        }
    
    componentDidMount() {
        axios.get('http://localhost:4000/exercises/')
        .then(res => { 
            this.setState({
                exercises: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteExercise(id) {
        axios.delete( 'http://localhost:4000/exercises/'+id)
            .then(res => console.log(res.data));
        
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }


    render() {

        const exerciseList= this.state.exercises.map(currentExercises => {
            return <tr key={ currentExercises._id}>
                        <td>{currentExercises.username}</td>
                        <td>{currentExercises.description}</td>
                        <td>{currentExercises.duration}</td>
                        <td>{currentExercises.date.substring(0,10)}</td>
                        <td>
                            <Link to={'/edit/'+currentExercises._id} >edit</Link> | <a href='#' onClick={() => {this.deleteExercise(currentExercises._id)} } >delete</a> 
                        </td>
                    </tr> 
        })

        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>UserName</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <tr>Actions</tr>
                        </tr>
                    </thead>
                    <tbody>
                        {exerciseList}
                    </tbody>
                </table>
            </div>
        )
    }
}
