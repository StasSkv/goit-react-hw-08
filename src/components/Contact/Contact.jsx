import { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Box, Tooltip } from '@mui/material';
import { Delete, Edit, Phone, AccountCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import EditContact from '../EditContact/EditContact';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEditOpen = () => {
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          p: 0,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: 2,
          '&:hover': { boxShadow: 4 },
          width: '100%',
        }}
      >
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                <AccountCircle fontSize="small" />
                <Typography
                  variant="h6"
                  sx={{
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                  }}
                >
                  {contact.name}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Phone fontSize="small" />
                {contact.number}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <Tooltip title="Редагувати">
                <IconButton onClick={handleEditOpen} color="primary">
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Видалити">
                <IconButton onClick={handleDelete} color="error">
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <EditContact open={isEditOpen} onClose={handleEditClose} contact={contact} />
    </>
  );
};

export default Contact;
