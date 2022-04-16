import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function TextInput({ label }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "sm",
        m: "auto",
        alignItems: "center",
        py: 2,
      }}
    >
      <Typography
        sx={{
          display: { xs: "none", sm: "block" },
          fontSize: "20px",
          fontWeight: "bold",
          width: "360px",
        }}
      >
        {label}
      </Typography>
      <TextField
        id="input-with-icon-textfield"
        label={label}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default TextInput;
