import { Fragment, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "../App/pages/Main";
import LocalStorageWorker from "./helpers/localStorageWorker";
import { userActions } from "./redux/slices/user.slice";

const App = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isUserExist = LocalStorageWorker.isUserExist();
    if (isUserExist) {
      dispatch(userActions.login(isUserExist));
    }
  }, []);
  return (
    <Fragment>
      <Main />
    </Fragment>
  );
};
export default App;
