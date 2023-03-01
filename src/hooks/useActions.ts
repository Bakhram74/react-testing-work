import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";

const actions = {
  ...AuthActionCreators
}
export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}