import * as moduleApi from "../../api/moduleApi";

export function loadModuleSuccess(data) {
  return { type: "LOAD_DATA_SUCCESS", data };
}

//dispatch is now a callback function, running after .getModules is finished.
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
