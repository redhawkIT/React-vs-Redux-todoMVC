import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({todos, actions}) => (
  <div>
    {console.log(todos)}
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

// Makes redux state available to App by props
const mapStateToProps = state => ({
  todos: state.todos
})

//
const mapDispatchToProps = dispatch => ({
    // wraps actions creators with dispatch so they can be called directly
    actions: bindActionCreators(TodoActions, dispatch)
})

// connect() will automatically bind dispatch to your actions if they are
// passed in as an object of function names.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
