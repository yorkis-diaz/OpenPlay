<<<<<<< HEAD
import { connect } from "react-redux";
import SearchResult from "./search_result";


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
      
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
=======
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResult from './search_result';
import { searchEvents } from '../../util/selectors';



const mapStateToProps = (state, ownProps) => {
    const query = ownProps.match.params.searchQuery
    const events = searchEvents(state.entities.events, query)
    debugger
    return {
        events
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult));
>>>>>>> search_feature
