import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions'
import { bindActionCreators } from 'redux'

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
        {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// function to connect react to redux. this component is a container.
function mapStateToProps(state) {
  // whatever gets returned here shows up as props inside of the current component
  return {
    // books key has value of books from redux state
    books: state.books
  }
}

// anything returned from this function will end up as props, that's why
// the object passed in has key selectBook and value selectBook
// the key is used to refer to the function in this.props.selectBook and the value
// is selectBook because that's the actual function we're importing from the actions
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, pass result to all reducers
  // selectBook is a plain function
  // bindActionCreators takes the function and makes it flow through all the reducers
  // the object syntax is so that we can customize what we want to call it in props right here too
  // instead of doing that elsewhere, so there are two things happening!
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// export container not component
// apply mapStateToProps to the component and the result is a container with react and redux connected
// apply mapDispatchToProps to give the action creators to props of this component
// i.e. container is component with piece of application state, and certain action creators in its props!
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
