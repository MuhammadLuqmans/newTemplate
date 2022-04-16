import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextInput from "./TextInput";
import Selector from "./Select";
import DatePicker from "./DatePickers";

export default function WorkflowParticipant({ HandleOpen, Open, handleClose }) {

//  const HandleSubmit =(event)=>{
//    event.precentDefault();
   
//   }

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
            height: "97vh",
            maxWidth: "md",
            overflow: "auto",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              bgcolor: "hsl(177deg 98% 19%)",
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
              py: 3,
              textShadow: "3px 3px 5px #232323",
            }}
          >
            Search WorkFlow Requests
          </Typography>
          <Box sx={{ m: "auto", mt: 2, maxWidth: "sm", p: 2 }}>
            <TextInput label="Request By" />
            <TextInput label="Request For" />
            <Selector label="Request Type" />
            <Selector label="Request Status" />
            <DatePicker label="Effective Date From" />
            <DatePicker label="Effective Date To" />
            <DatePicker label="Requested Start Date" />
            <DatePicker label="Requested End Date" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              height: "80px",
              alignItems: "center",
              mt: -2,
              mb: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "hsl(177deg 98% 19%)",
                mr: 3,
                width: 130,
                py: 1.2,
                fontSize: 16,
                fontWeight: "bold",
              }}
              onClick={handleClose}
            >
              Cencel
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "orange !important",
                mr: 3,
                color: "#fff",
                width: 130,
                py: 1.2,
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
