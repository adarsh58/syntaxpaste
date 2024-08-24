import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CopyCode from "../../CopySyntax/CodePlayGround/CopyCode";
import './CodeModal.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CodeModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Click me</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Happy Copying
          </Typography>
          <Typography id="modal-modal-title" variant="h10" component="h4">
            {props.code.map((i) => {
              return <CopyCode file={i.File} Logic={i.Logic} code={i.Syntax} />;
            })}
          </Typography>
       
        </Box>
      </Modal>
    </div>
  );
}
