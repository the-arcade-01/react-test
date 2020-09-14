import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodos from './components/AddTodos';
// import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About';

// for http requests
import axios from 'axios';

class App extends React.Component {
  state = {
    todos:[]
  }

  // another lifecycle
  componentDidMount(){
    // axios.get('url') return promise
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos:res.data}))
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  // delete todo
  delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>this.setState({todos:[...this.state.todos.filter(todo=>{
      return todo.id !== id;})]}));
  }

  // add todo 
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:title,
      completed:false
    }).then(res=>this.setState(
      { todos : [...this.state.todos, res.data]}
    ));
  }
  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className = 'container'>
            <Header/>
            <Route exact path = '/' render={ props => (
              <React.Fragment>
                <AddTodos addTodo = {this.addTodo}/>
                <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path = '/about' component = {About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
