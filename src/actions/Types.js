import _apisconfig from "../assets/json/Apiconfig.json";

//Action Type

// export const URL = process.env.REACT_APP_URL;
export const URL = _apisconfig.apidata.serverpath;
export const API_LOGIN = URL + _apisconfig.apidata.login;

export const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
