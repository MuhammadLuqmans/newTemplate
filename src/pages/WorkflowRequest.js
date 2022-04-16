import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import WorkflowsRequestOpt from '../components/workflows/WorkflowsRequestOpt';
import Activity from "../components/workflows/Activity";

export default function WorkflowRequest() {
  return (
    <Box sx={{ maxWidth: 1440, m: "auto", mt: 5 }}>
      <Typography variant="h5" sx={{ color: "#000",  px:3, textAlign:{xs:'center' , sm:'left'}, mb:-2 }}>
        Workflow Details
      </Typography>
      <Grid item container xs={12} sx={{ mt:2 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={7.5}
          sx={{ p:{ xs:0, sm:2, md:3 } }}
        >
          <WorkflowsRequestOpt />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4.5}
          sx={{ p:{ xs:0, sm:2, md:3 } }}
        >
          <Activity />
        </Grid>
      </Grid>
    </Box>
  );
}
