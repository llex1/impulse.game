import React, { ReactElement } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../components/Logo";
import User from "../../components/User";

const styles = {
  wrapper: { bgcolor: "dodgerblue" },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: 1,
    color: "#E3F0FF",
  },
};

const Header = (): ReactElement => {
  return (
    <Box sx={styles.wrapper}>
      <Container sx={styles.mainContainer}>
        <Logo />
        <User />
      </Container>
    </Box>
  );
};
export default Header;
