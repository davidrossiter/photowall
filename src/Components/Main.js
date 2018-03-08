import React, {Component} from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import Single from './Single';

class Main extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route exact path="/" render={() => (
            <div>
              <div>
              <Photowall {...this.props} />
              </div>
            </div>
          )
        } />
      <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto {...this.props} />
          )} />
        <Route path="/single/:id" render={(params) => (
            /*params must come after this.props*/
            <Single {...this.props} {...params} />
          )} />
        </div>
    )
  }
}

export default Main
