import { useState, ReactElement, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { loginAcitons } from "../../redux/slices/login.slice";
import { userActions } from "../../redux/slices/user.slice";
import LocalStorageWorker from "../../helpers/localStorageWorker";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  iconClose: {
    position: "absolute",
    right: 8,
    top: 8,
    color: grey[500],
  },
  dialogActions: { my: 0.5, mx: 1 },
} as const;

const DialogLogin = (): ReactElement => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const isLogin: boolean = useSelector(
    (state: RootState) => state.login.isLogin
  );

  const handleClose = (): void => {
    dispatch(loginAcitons.false());
  };
  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin(() => {
      return event.target.value;
    });
  };
  const handleSaveChange = (): void => {
    LocalStorageWorker.login(login);
    dispatch(userActions.login(login));
    setLogin(() => {
      return "";
    });
    dispatch(loginAcitons.false());
  };

  return (
    <Dialog open={isLogin}>
      <DialogTitle>
        Login
        <IconButton onClick={handleClose} sx={styles.iconClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <TextField
          label="login"
          variant="outlined"
          value={login}
          onChange={handleChangeLogin}
        />
      </DialogContent>
      <DialogActions sx={styles.dialogActions}>
        <Button variant="contained" onClick={handleSaveChange}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogLogin;
