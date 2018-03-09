import React, {Component} from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import Single from './Single';

class Main extends Component {

  state = { loading: true }

  componentDidMount() {
    this.props.startLoadingPosts()
    /* photo states are not global, so don't just use redux set the state so when the post is loaded independantly it shows up */
    .then(() => {
      this.setState({loading: false})
    })
    this.props.startLoadingComments()
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
            <Single loading={this.state.loading} {...this.props} {...params} />
          )} />
        </div>
    )
  }
}

export default Main
