import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    maxWidth: '600px',
    borderRadius: '4px',
    boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.15)',
  },
}))

export const InfoModal = ({ documentType, desc }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <HelpOutlineOutlinedIcon
        style={{ color: 'lightgrey', marginBottom: '7px' }}
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ fontFamily: 'Lato' }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <i
              id="transition-modal-title"
              style={{ marginBottom: '5px', fontWeight: 'bold' }}
            >
              {documentType}
            </i>
            <div id="transition-modal-description">{desc}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
