import React, {Component} from 'react';
import Title from './Title';
import List from './List';

class Main extends Component {
  render() {
    return <div>
      <Title title="Todo"/>
      <List tasks={["Mow the lawn", "Walk the dog"]}/>
      <List tasks={["Hose driveway", "Finish the laundry"]}/>
    </div>
  }
}

export default Main
