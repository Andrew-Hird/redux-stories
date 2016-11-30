import {connect} from 'react-redux'
import {deleteWord} from '../actions'
import Words from '../components/Words'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(deleteWord(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Words)
