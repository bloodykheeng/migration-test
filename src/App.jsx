import * as React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  minHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function App() {
  const [open, setOpen] = React.useState(false);
  const [showDiv, setShowDiv] = React.useState(true);
  const handleOpen = () => {
    setShowDiv(false);
    setOpen(true);
  };
  const handleClose = () => {
    setShowDiv(true);
    setOpen(false);
  };
  return (
    <>
      <div
        className="card transition"
        style={{ visibility: showDiv ? "visible" : "hidden" }}
      >
        <h2 className="transition">Migration Programme</h2>
        <p>To know more about the migration programe click button bellow</p>
        <div className="cta-container transition">
          <a href="#" className="cta" onClick={handleOpen}>
            View More
          </a>
        </div>
        <div className="card_circle transition"></div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Migration programe
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 5 }}>
            Hei this is not about the migration programme .😅😅😅😅. Anyway its
            me the guy you hate most. Just looked for away to talk to you since
            you always just block me after recognition i thought this ov this as
            a new technique that could catch ur minds. Lol 😆😆. Anyway. Lemi
            hope ive not just made you more and more angry . I dont have much
            too say but i just wanted to change the way you take me. I sent
            soneone to talk 2 u. On my behalf but the reply i got was that my
            calls pissed you so much en mai be its y u decided to hate me this
            much. But all i can say is that am sorry. I didnt mean to annoy that
            much , but one day if time allows, uill know why it happened like
            that. Let me request u sm | why dont you unblock me and we leave in
            peace without hating 😌 .
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default App;
