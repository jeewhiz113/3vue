export default function moduleReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS":
      return action.data; //simply return what the endpoint gives us and we will inject this data in the modules property in our redux store.  
    default:
      return state;
  }
}
