import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Grid, Card,  Button } from "@mui/material";

const UserDetails = [
  {
    id: 1,
    UserName: "UserFirstName13...",
    imgUrl: "",
    heading: "Approvers",
    status: "Approved",
    date: "04 June 2021",
  },
  {
    id: 2,
    UserName: "UserFirstName13...",
    imgUrl: "",
    heading: "Cc Roles",
  },
];

export default function WorkFlowModel({ HandleOpen, Open, handleClose }) {
  return (
    <div>
      <Modal
        open={Open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            width: "90%",
            height: "80%",
            maxWidth: "md",
            overflow: "auto",
            border:'none',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              bgcolor: "hsl(177deg 98% 19%)",
              textAlign: "center",
              color: "#fff",
              py: 2,
              textShadow: "3px 3px 5px #232323",
            }}
          >
            WorkFlow Participant
          </Typography>
          <Box sx={{ px: 4, pt: 5, pb: 2 }}>

          {UserDetails.map((data) => {
            return (
              <>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    color: "#0f4861",
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                >
                  {data.heading}
                </Typography>
                <Divider sx={{ border: "0.5px solid #cbc9c9 ", mt: 1 }} />
                <Grid
                  item
                  container
                  sx={{ justifyContent: "space-between", mt: 2 }}
                >
                  <Grid item container xs={12} sm={12} md={6}>
                    <Card sx={{ width: 120, height: 120 }}>
                      <Box
                        component="img"
                        src="./assets/img.png"
                        alt="manDp"
                        sx={{
                          bgcolor: "#cfc6c6",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Card>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 1,
                        ml: 2,
                        color: "#3e3e3e",
                        fontWeight: "bold",
                        fontSize: 18,
                        fontFamily: "Roboto slab, sans-serif",
                      }}
                    >
                      {data.UserName}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} sx={{ pl: 2 }}>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 1,
                        color: "green",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      {data.status}
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 1,
                        color: "gray",
                        fontSize: 18,
                      }}
                    >
                      {data.date}
                    </Typography>
                  </Grid>
                </Grid>
                </>
            );
          })}
              </Box>
          <Box
            sx={{    
              textAlign:'right',
              mt:15,
            }}
          >
                <Divider />
            
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "hsl(177deg 98% 19%) !important",
                mr: 3,
                color: "#fff",
                width: 130,
                py: 1,
                fontWeight: "bold",
                fontSize: "16px",
                mt:2
              }}
            >
              Close
            </Button>
          </Box>
        </Box>

      </Modal>
    </div>
  );
}
