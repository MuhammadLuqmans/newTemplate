import React from "react";
import { Grid, Typography, Box, Card } from "@mui/material";
import WorkFlowModel from "../WorkflowDetails";

export default function Activity() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card>
      <Grid item container xs={12} sx={{ mt: 1, p: { xs: 2, sm: 3, md: 3 } }}>
        <Grid
          item
          xs={12}
          sm={2.5}
          md={2}
          lg={3.5}
          sx={{ textAlign: "center" }}
        >
          <Box
            component="img"
            src="./assets/img.png"
            alt="text"
            sx={{
              width: "100%",
              height: 100,
              bgcolor: "#cfc6c6",
              maxWidth: 110,
              minHeight: 110,
              border: "1px solid gray",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={6}
          lg={8}
          sx={{
            pl: { xs: 0, sm: 2 },
            mt: { xs: 3, sm: 0 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            onClick={handleOpen}
            sx={{
              fontSize: { xs: 18, sm: 20 },
              color: "#f9a11c",
              cursor: "pointer",
            }}
          >
            Sarah1 Employee2
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: "#23232",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Witham St Hughs (GB00047)
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: "#232323",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            No Direct Report
          </Typography>
        </Grid>
      </Grid>
      {/* Modal For Activities */}
      <WorkFlowModel
        HandleOpen={handleOpen}
        Open={open}
        handleClose={handleClose}
      />

      <Typography
        sx={{
          bgcolor: "#01615c",
          color: "#fff",
          py: 1,
          px: 3,
          fontSize: "20px",
        }}
      >
        Activity
      </Typography>

      <Grid item container xs={12} sx={{ mt: 0, p: { xs: 2, sm: 3, md: 3 } }}>
        <Grid
          item
          xs={12}
          sm={2.5}
          md={2}
          lg={3.5}
          sx={{ textAlign: "center" }}
        >
          <Box
            component="img"
            src="./assets/img.png"
            alt="text"
            sx={{
              width: "100%",
              height: 100,
              bgcolor: "#cfc6c6",
              maxWidth: 110,
              minHeight: 110,
              border: "1px solid gray",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={6}
          lg={8.5}
          sx={{
            pl: { xs: 0, sm: 2 },
            mt: { xs: 3, sm: 0 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: "#232323",
            }}
          >
            Approved by Sara Weston on the behave of UserFirstName138
            userMiddleName138 and UserLastName138
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        sx={{ mt: 0, px: { xs: 2, sm: 3, md: 3 }, pb: { xs: 2, sm: 3, md: 3 } }}
      >
        <Grid
          item
          xs={12}
          sm={2.5}
          md={2}
          lg={3.5}
          sx={{ textAlign: "center" }}
        >
          <Box
            component="img"
            src="./assets/img.png"
            alt="text"
            sx={{
              width: "100%",
              height: 100,
              bgcolor: "#cfc6c6",
              maxWidth: 110,
              minHeight: 110,
              border: "1px solid gray",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          md={6}
          lg={8.5}
          sx={{
            pl: { xs: 0, sm: 2 },
            mt: { xs: 3, sm: 0 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: "#232323",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Initiated by Sara Weston on the behave of Payslip Employ on 04 June
            2021
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: "#7a7777c4",
              fontFamily: "Roboto, sans-serif",
              mt: 1,
            }}
          >
            "Selected On Probation as on Option for Probation Completed but
            changed Probation End Date to 3/6"
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
