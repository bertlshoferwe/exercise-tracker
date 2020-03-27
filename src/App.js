import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar';
import ExercisesList from './components/exercisesList';
import EditExercise from './components/editExercise';
import CreateExercise from './components/createExercise';
import CreateUser from './components/createUser';

function App() {
  return (
    <Router>

      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route path='/' exact component={ExercisesList} />
          <Route path='/edit/:id'  component={EditExercise} />
          <Route path='/create'  component={CreateExercise} />
          <Route path='/user'  component={CreateUser} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;
