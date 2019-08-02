import React from 'react';
import './App.css';
import User from './components/User';

class App extends React.Component {
  state = {
    person: [
      {
        name: 'atai',
        age: 23
      },
      {
        name: 'Faisal',
        age: 19
      },
      {
        name: 'John Doe',
        age: 30
      },
      {
        name: 'Trump',
        age: 66
      },
      {
        name: 'Erbol',
        age: 14
      }
    ]
  }

  onDelete = (index) => {
    console.log()
    let person = this.state.person;
    person.splice(index, 1);
    // console.log(person);
    this.setState({ person })
  }

  render(){
    return (
      <div className="App">
        { this.state.person.map((item, index) => <User key={index} data={item} callback={() => this.onDelete(index)}/>) }
      </div>
    )
    }
}

export default App;