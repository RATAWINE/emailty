import axios from "axios";
import { FETCH_USER } from "./types";

// export const fetchUser = () => async (dispatch) => {
//   const res = await axios.get("/api/current_user");
//   await dispatch({ type: FETCH_USER, payload: res });
// };
export const fetchUser = () => async (dispatch) => {
  await dispatch({
    type: FETCH_USER,
    payload: await (await axios.get("/api/current_user")).data,
  });
};
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
