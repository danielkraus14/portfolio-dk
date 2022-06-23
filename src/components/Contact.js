import React from "react";
import {
  Grid,
  Typography,
  Box,
  useTheme,
  FormGroup,
  TextField,
  styled,
} from "@mui/material";

import crane from "../assets/cranes.png";

const CustomizedTextField = styled(TextField)(
  ({ theme }) => `
  
  '& .MuiInputBase-input-MuiOutlinedInput-input': {

    color: #fff;

    
}
`
);

const Contact = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent="center" sx={{ padding: "2rem 0.5rem", backgroundColor: theme.palette.common.darkGray, height: 'calc(100vh - 100px)'}}>
      <Typography variant="h2" sx={{fontFamily: "'Otomanopee One', sans-serif", color: theme.palette.common.white}}>
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
            <CustomizedTextField
              variant="outlined"
              color="secondary"
              label="Name"
              id="name"
              sx={{borderColor: theme.palette.secondary.dark}}
            />
          </Grid>
          <Grid item sx={{padding: '2rem'}}>
            <TextField variant="outlined" color="secondary" label="Email" id="email" />
          </Grid>
          <Grid item sx={{padding: '2rem'}}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              color="secondary"
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
