import { connect } from 'react-redux'
import { deleteWord } from '../actions'
import Words from '../components/Words'

const getVisibleList = (words, filter) => {
  return words.filter(w => w.word.includes(filter))
}

const mapStateToProps = (state) => {
  return {
    words: getVisibleList(state.words, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(deleteWord(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Words)
