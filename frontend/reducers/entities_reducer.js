// This reducer will keep track of all the relational data in our app
import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import listingsReducer from "./listings_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
});

export default entitiesReducer;
