import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactElement } from "react";

const CustomizedDialog = (): ReactElement => {
  return (
    <Dialog open={true}>
      <DialogTitle>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <DialogActions sx={{ my: 0.5, mx: 1 }}>
          <Button variant="contained">Ok</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
export default CustomizedDialog;
