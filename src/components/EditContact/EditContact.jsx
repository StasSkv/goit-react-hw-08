import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import s from './EditContact.module.css';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';

const EditContact = ({ open, onClose, contact }) => {
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState({
    name: contact.name,
    number: contact.number,
  });

  const handleChange = (e) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(updateContact({ id: contact.id, ...editedContact }));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Редагувати контакт</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Ім'я"
          type="text"
          fullWidth
          variant="outlined"
          name="name"
          value={editedContact.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Номер"
          type="text"
          fullWidth
          variant="outlined"
          name="number"
          value={editedContact.number}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} className={s.close}>
          Закрити
        </Button>
        <Button onClick={handleSave} className={s.edit}>
          Зберегти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditContact;
