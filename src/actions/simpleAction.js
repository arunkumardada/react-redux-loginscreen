import axios from "axios";
import { HEADERS, API_LOGIN } from "../actions/Types";

export const simpleAction = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action",
  });
};

export const onLoginSubmit = (e) => async (dispatch) => {
  const username = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;
  const payload = { username: username, password: password };
  console.log(API_LOGIN);
  return axios.post(API_LOGIN, payload, { headers: HEADERS }).then((resp) => {
    dispatch({
      type: "LOGIN_ACTION",
      payload: {
        username: username,
        password: password,
      },
    });
  });
};
