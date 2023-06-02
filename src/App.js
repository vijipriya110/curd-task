import { Switch, Route } from 'react-router-dom';
import './App.css';
// import Base from './Base/Base';
import Students from './Components/Students.js';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
import Nopage from './Components/Nopage';
import Dashboard from './Components/Dashboard';
import { Redirect } from 'react-router-dom'



function App() {
  

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/Students">
          <Students/>
        </Route>
        
        <Route path="/details">
          <Redirect to="/Students/" />
        </Route>

        <Route path="/add">
          <AddStudents />
        </Route>

        <Route path="/edit/:id/">
          <UpdateStudents />
        </Route>

        <Route path="**">
          <Nopage />
        </Route>

      </Switch>

    </div>
  );
}
export default App;