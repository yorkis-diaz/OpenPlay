import { connect } from "react-redux";
import { searchEvents } from "../../actions/event_actions";
import SearchBar from "./search_bar";
import { withRouter } from 'react-router-dom'
import ResultSearchBar from "./result_search_bar";
import { receiveReservationInfo } from "../../actions/reservation_actions";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    searchEvents: searchQuery => dispatch(searchEvents(searchQuery)),
    receiveReservationInfo: (reservationInfo) => dispatch(receiveReservationInfo(reservationInfo))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultSearchBar));
