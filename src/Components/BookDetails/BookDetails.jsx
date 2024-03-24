import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { FineStatus } from "../../services/services";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookDetails = ({ open, setOpen, selectedBook, userId }) => {
  //   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fineStatus, setFineStatus] = useState();

  useEffect(() => {
    checkFineStatusOfBook();
  }, []);

  const checkFineStatusOfBook = async () => {
    try {
      const fineStatus = await FineStatus({
        userId: userId,
        bookId: selectedBook._id,
      });

      console.log(fineStatus,'finesatus')
    } catch (error) {}
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedBook?.BookName}
          </Typography>
          <div>
            <button class="bg-rose-800 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded">
              Check Fine
            </button>

            <button class="bg-rose-800 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded">
              Check out
            </button>

            <button class="bg-rose-800 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded">
              Return
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BookDetails;
