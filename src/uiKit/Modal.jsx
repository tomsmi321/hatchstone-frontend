import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
};

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    borderRadius: 4
  }
}));

const CloseModal = styled(CloseIcon)`
  &&& {
    position: absolute;
    right: 20px;
  }
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  padding-top: 100px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  padding: 40px 30px 140px;
`;



export const SimpleModal = ({ approved, showModal, handModalClose, firstName}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(showModal);

  // const handleOpen = () => {
  //   setOpen(showModal);
  // };

  // listen to showModal state for any change and update the open state of Modal, keeping things in sync
  useEffect(() => {
    setOpen(showModal)
  }, [showModal])

  
  const handleClose = () => {
    handModalClose()
    setOpen(showModal);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <CloseModal onClick={handleClose} />
          {approved ? (
            <>
              <Heading>Great news!</Heading>
              <Text>{`${firstName} your application has been approved.`}</Text>
            </>
          ) : (
            <>
              <Heading>Thank you!</Heading>
              <Text>{`${firstName} we are reviewing your documents, we will be in touch shortly.`}</Text>
            </>
          )}
          
        </div>
      </Modal>
    </div>
  );
};

