import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAcitons } from "../../redux/slices/login.slice";
import { userActions } from "../../redux/slices/user.slice";
import { RootState } from "../../redux/store";
import { Box, Avatar, Typography, Button } from "@mui/material";
import LocalStorageWorker from "../../helpers/localStorageWorker";

const styles = {
  mainBox: { display: "flex", alignItems: "center" },
  money: { fontWeight: "700", mr: 2 },
  userName: (name: string | undefined) => {
    if (name) {
      return { bgcolor: "green", color: "#fff", mr: 1 };
    }
    return {
      bgcolor: "#A5ABBD",
      color: "white",
      mr: 1,
    };
  },
  buttonLogin: {
    color: "black",
    fontWeight: "500",
  },
};
//!!basic avatar don't display after logout
//!!user money
const User = (): ReactElement => {
  const userInfo = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const parseUserName = userInfo.name?.slice(0, 2).toUpperCase();
  const handleLogin = (): void => {
    !userInfo.name
      ? dispatch(loginAcitons.true())
      : LocalStorageWorker.logout() && dispatch(userActions.logout());
  };

  return (
    <Box sx={styles.mainBox}>
      <Typography sx={styles.money}>${userInfo.money}</Typography>
      <Avatar sx={styles.userName(userInfo.name)}>{parseUserName}</Avatar>
      <Button sx={styles.buttonLogin} onClick={handleLogin}>
        {userInfo.name ? "logout" : "login"}
      </Button>
    </Box>
  );
};
export default User;
