import { Alert, Card, Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WorkflowParticipant from "../WorkflowParticipant";

export default function WorkflowsRequestOpt() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box>
      <Alert severity="info" sx={{ fontSize:{ xs:16 , sm:18 },m:{ xs:1, sm:0 } }}>
        Content display on this page is restricted on this based on user
        permission
      </Alert>
      <Card sx={{ mt: 1, p:{ xs:2, sm:3, md:3 } }}>
        <Typography variant="h5">
          This work flow request is completed
        </Typography>
        <Grid item container xs={12} sx={{ mt:4 }}>
          <Grid
            item
            xs={12}
            sm={2.5}
            md={1.6}
            sx={{ textAlign:'center' }}
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
                minHeight:110,
                border:'1px solid gray'
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            md={8}
            sx={{  px:{ xs:0, sm:2 }, mt:{xs:3 , sm:0 ,}, textAlign: { xs:'center', sm:'left'  } }}
          >
            <Typography
              sx={{
                fontSize: { xs:18, sm:20 },
                fontWeight: "bold",
                color: "#232323",
              }}
            >
              On Probation form Sarah1 Employee2
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#7a7777c4",
                py:1,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Initiated by Payslip Employee on 04 June 2021
            </Typography>
            <Typography
              sx={{
                fontSize: { xs:16, sm:18 },
                py:1,
                color: "#7a7777c4",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Effective Date 03 June 2021
            </Typography>
            <Button variant="text" onClick={handleOpen} sx={{ fontWeight:'bold' , color:'#f9a11c' }} >
              View WorkFlow Participant
            </Button>
            <WorkflowParticipant  HandleOpen={handleOpen} Open={open} handleClose={handleClose} />
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ mt: 1, p:{ xs:2, sm:3, md:3 } }}>
      <Typography variant="h5" sx={{  textAlign: { xs:'center', sm:'left'  } }}>
          Job Information
        </Typography>
        <Grid item container xs={12} sx={{ mt:2 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Typography
              sx={{
                fontSize: { xs:16, sm:18 },
                py:1,
                color: "#7a7777c4",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Country
            </Typography>
        </Grid>
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Typography
              sx={{
                fontSize: { xs:16, sm:18 },
                py:1,
                color: "#232323",
                fontWeight:'bold',
                fontFamily: "Roboto, sans-serif",
              }}
            >
              United Kingdom
            </Typography>
        </Grid>
        </Grid>
        <Grid item container xs={12} >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Typography
              sx={{
                fontSize: { xs:16, sm:18 },
                py:1,
                color: "#7a7777c4",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Probationary Period End Date
            </Typography>
        </Grid>
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            container
          sx={{ alignItems:'center' }}
          >
            <Typography
              sx={{
                fontSize: { xs:16, sm:18 },
                py:1,
                color: "#232323",
                fontWeight:'bold',
                fontFamily: "Roboto, sans-serif",
              }}
            >
              04/06/2021 
            </Typography>
            <Typography sx={{ textDecoration: 'line-through' , ml:2, color: "#7a7777c4", }}>03/08/2021 </Typography>
        </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
