import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {removePost} from '../redux/actions';

class Main extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Route exact path="/" render={() => (
            <div>
              <div>
              <Title title={"Photo Wall"}/>
              <Photowall {...this.props} />
              </div>
            </div>
          )
        } />
      <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto onAddPhoto={(addedPost) => {
                history.push("/")
              }} />
          )} />

        </div>
    )
  }
}

export default Main
