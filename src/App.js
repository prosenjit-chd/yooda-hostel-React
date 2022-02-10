import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AddStudents from './components/AddStudents/AddStudents';
import AddFood from './components/AddFood/AddFood';
import Students from './components/Students/Students';
import Foods from './components/Foods/Foods';
import Distribution from './components/Distribution/Distribution';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addstudents">
            <AddStudents></AddStudents>
          </Route>
          <Route path="/addfoods">
            <AddFood></AddFood>
          </Route>
          <Route path="/allstudents">
            <Students></Students>
          </Route>
          <Route path="/allfoods">
            <Foods></Foods>
          </Route>
          <Route path="/distribution">
            <Distribution></Distribution>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
