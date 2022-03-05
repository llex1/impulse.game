import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <Box sx={{ bgcolor: "#414756", color: "#A5ABBD", p: 2 }}>
      <Container>
        <p>© Impulse.game</p>
      </Container>
    </Box>
  );
};
export default Footer;
