import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../redux/slices/game.slice";
import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { RootState } from "../../redux/store";

const styles = {
  mainContainer: {
    pt: 2,
  },
  buttonStartGame: {
    mb: 2,
  },
};

const Content = (): ReactElement => {
  const dispatch = useDispatch();
  const handleStartGame = (): void => {
    dispatch(gameActions.start());
  };
  const tableData = useSelector((state: RootState) => state.table);

  return (
    <Container sx={styles.mainContainer}>
      <Button
        variant="contained"
        color="success"
        sx={styles.buttonStartGame}
        onClick={handleStartGame}
      >
        Let's game
      </Button>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>symbols</TableCell>
            <TableCell>time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((el) => {
            return (
              <TableRow>
                <TableCell>{el.id}</TableCell>
                <TableCell sx={{ display: "flex" }}>{el.result}</TableCell>
                <TableCell>{el.time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};
export default Content;
