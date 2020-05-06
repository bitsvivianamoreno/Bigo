import React, {Component} from 'react';
import './invoice.list.css';

export class InvoiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'],
    };
  }

  render() {
    const { tasks } = this.state;
    
    return (
      <div>
        <input type="text" placeholder="Filtrar por número..."/>
        
        <div>
          <ul>
            {tasks.map(task => <li>{task}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}