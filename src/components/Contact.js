import React from "react";
import {
  Grid,
  Typography,
  Box,
  useTheme,
  FormGroup,
  TextField,
  TextareaAutosize,
} from "@mui/material";

import crane from "../assets/cranes.png";

const Contact = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent="center" sx={{ padding: "2rem 0.5rem" }}>
      <Typography variant="h2">
        C
        <Box display="inline-block" sx={{ color: theme.palette.primary.main }}>
          O
        </Box>
        NT
        <Box display="inline-block" sx={{ color: theme.palette.primary.main }}>
          A
        </Box>
        CT M
        <Box display="inline-block" sx={{ color: theme.palette.primary.main }}>
          E
        </Box>
      </Typography>
      <Grid container item direction="column">
        <FormGroup>
          <Grid item sx={{padding: '2rem'}}>
            <TextField
              variant="outlined"
              color="primary"
              label="Name"
              id="name"
              sx={{borderColor: theme.palette.secondary.dark}}
            />
          </Grid>
          <Grid item sx={{padding: '2rem'}}>
            <TextField variant="outlined" color="primary" label="Email" id="email" />
          </Grid>
          <Grid item sx={{padding: '2rem'}}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              color="primary"
              multiline
              rows={5}
              placeholder="Add a message"
            />
          </Grid>
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default Contact;
