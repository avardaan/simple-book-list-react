export function selectBook(book) {
  // selectBook actionCreator returns action object
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}
