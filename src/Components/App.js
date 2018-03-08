import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePost} from '../redux/actions';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
  return {
    posts: state
  }
}

const mapDispatchToPros = (dispatch) => {
  return bindActionCreators({removePost}, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToPros)(Main));

export default App
