import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Delete, Phone, AccountCircle } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Card
      sx={{
        p: 1,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: 2,
        '&:hover': { boxShadow: 4 },
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccountCircle fontSize="small" />
              {contact.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Phone fontSize="small" />
              {contact.number}
            </Typography>
          </Box>

          <IconButton onClick={handleDelete} color="error" size="large">
            <Delete />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Contact;
