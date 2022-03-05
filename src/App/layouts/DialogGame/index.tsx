import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { gameActions } from "../../redux/slices/game.slice";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { grey } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import SpinWorker from "../../helpers/spinWorker";
import { IUserState, userActions } from "../../redux/slices/user.slice";
import { IRun } from "../../helpers/spinWorker";
import { PLAY_FEE } from "../../helpers/constants";
import { tableAction } from "../../redux/slices/table.slice";
import { v4 as uuidv4 } from "uuid";

const styles = {
  iconClose: {
    position: "absolute",
    right: 8,
    top: 8,
    color: grey[500],
  },
  spinBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  spinSlot: (color: string | undefined) => {
    if (color) {
      return {
        color: color,
        p: 3,
        minWidth: 20,
        minHeight: 20,
        fontSize: 30,
      };
    }
    return {
      p: 3,
      minWidth: 20,
      minHeight: 20,
    };
  },
  dialogActions: { my: 0.5, mx: 1 },
  circularProgress: {
    animationDuration: "550ms",
  },
} as const;

const DialogLogin = (): ReactElement => {
  const dispatch = useDispatch();
  const isDialogGame: boolean = useSelector(
    (state: RootState) => state.game.isGame
  );
  const userInfo: IUserState = useSelector((state: RootState) => state.user);
  const [isRunGame, setRunGame] = useState<boolean>(false);
  const [gameResult, setGameResult] = useState<IRun | undefined>();

  const handleClose = (): void => {
    setRunGame(() => {
      return false;
    });
    dispatch(gameActions.stop());
  };

  const handlePlay = (): void => {
    if (1 > userInfo.money) {
      return;
    }
    setRunGame(() => {
      return true;
    });
  };

  const runSpinWorker = async (): Promise<void> => {
    dispatch(userActions.play(PLAY_FEE));
    setGameResult(undefined);
    dispatch(gameActions.start());
    const result = await SpinWorker.run();
    setGameResult(result);
    dispatch(userActions.win(result.benefit));
    setRunGame(() => {
      return false;
    });
    const dataForTable = {
      id: uuidv4(),
      result: `${result.slot1.code}${result.slot2.code}${result.slot3.code}`,
      time: Date.now(),
    };
    dispatch(tableAction.add(dataForTable));
  };

  const handleWin = (): void => {
    dispatch(userActions.play(PLAY_FEE));
    setRunGame(() => {
      return false;
    });
    const result = SpinWorker.zeusMode();
    setGameResult(result);
    dispatch(userActions.win(result.benefit));
    const dataForTable = {
      id: uuidv4(),
      result: `${result.slot1.code}${result.slot2.code}${result.slot3.code}`,
      time: Date.now(),
    };
    dispatch(tableAction.add(dataForTable));
  };

  useEffect(() => {
    if (isRunGame) {
      runSpinWorker();
    }
  }, [isRunGame]);

  useEffect(() => {
    setGameResult(undefined);
  }, [isDialogGame]);

  return (
    <Dialog open={isDialogGame} fullWidth={true} maxWidth="sm">
      <DialogTitle>
        S-Game
        <IconButton onClick={handleClose} sx={styles.iconClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={styles.spinBox}>
          <Paper sx={styles.spinSlot(gameResult?.slot1.color)}>
            {isRunGame && (
              <CircularProgress disableShrink sx={styles.circularProgress} />
            )}
            {gameResult?.slot1.code}
          </Paper>
          <Paper sx={styles.spinSlot(gameResult?.slot2.color)}>
            {isRunGame && (
              <CircularProgress disableShrink sx={styles.circularProgress} />
            )}
            {gameResult?.slot2.code}
          </Paper>
          <Paper sx={styles.spinSlot(gameResult?.slot3.color)}>
            {isRunGame && (
              <CircularProgress disableShrink sx={styles.circularProgress} />
            )}
            {gameResult?.slot3.code}
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions sx={styles.dialogActions}>
        <Button variant="contained" onClick={handlePlay}>
          Play
        </Button>
        <Button variant="contained" onClick={handleWin}>
          Just Win
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogLogin;
