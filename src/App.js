import React from 'react'
import './App.css'

//route
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'

//pages
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Purchase from './Pages/Purchase'
import Signup from './Pages/Signup'
import Project from './Pages/Project'
import TodoMain from './Components/Projects/TodoListProject/TodoMain'
import Docdetail from './Components/InstructorsPages/Docdetail';

//redux

function App() {
  return (
  
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={Signin} exact />
          <Route path='/purchase' component={Purchase} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/project' component={Project} exact/>
          <Route path='/todolist' component={TodoMain} exact />
          <Route path='/docdetail' component={Docdetail} exact />
          <Route path='*' component={() => '404 Page Not Found'} exact />
        </Switch>
      </Router>
    </>
  )
}

export default App