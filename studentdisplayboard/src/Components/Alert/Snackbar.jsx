import React from "react";
import { Snackbar as SnackBar } from "@mui/material";
import Alert from "./Alert";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../redux/actions/fetchDataAction";

const Snackbar = (props) => {
  const {
    status,
    confirmationSnackbarMessage,
    confirmationSnackbarOpen,
    setConfirmationSnackbarOpen,
  } = props;
  const dispatch = useDispatch();
  let severity = "";
  status ? (severity = "error") : (severity = "success");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setConfirmationSnackbarOpen(false);
  };
  console.log(confirmationSnackbarMessage);
  return (
    <SnackBar
      open={confirmationSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {confirmationSnackbarMessage}
      </Alert>
    </SnackBar>
  );
};

export default Snackbar;
