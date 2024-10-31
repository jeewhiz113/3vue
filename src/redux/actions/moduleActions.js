import * as moduleApi from "../../api/moduleApi";

export function loadModuleSuccess(data) {
  return { type: "LOAD_DATA_SUCCESS", data };
}

export function loadModules() {
  return function (dispatch) {
    return moduleApi
      .getModules()
      .then((data) => {
        dispatch(loadModuleSuccess(data));
      })
      .catch((error) => {
        throw error;
      });
  };
}
