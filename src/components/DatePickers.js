import * as React from "react";
import { TextField, Box, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function DatePicker({ label }) {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
      <LocalizationProvider dateAdapter={AdapterDateFns} >
        <DesktopDatePicker
          label={label}
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </Box>
  );
}
