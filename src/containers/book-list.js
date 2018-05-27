import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item"> {book.title} </li>
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

// export container not component
// apply mapStateToProps to the component and the result is a container with react and redux connected
export default connect(mapStateToProps)(BookList)
