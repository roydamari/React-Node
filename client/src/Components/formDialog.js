import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const axios = require('axios');

export default function FormDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClose = (e) => {
        if (e.target.tagName == "DIV") return;
        let input = e.currentTarget.parentElement.parentElement.children[1].children[1].children[1].children[0];
        if (input.value) {
            let date = new Date().toDateString();
            axios.post('http://localhost:4000/api/v1/records', { name: input.value, date: date });
            setOpen(false);
        }
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Congratulations, You've Won!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your name below
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter your name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Enter
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}