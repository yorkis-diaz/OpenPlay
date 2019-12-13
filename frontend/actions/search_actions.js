export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const receiveSearch = searchQuery => {
  return {
    type: RECEIVE_SEARCH,
    searchQuery
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  };
};
