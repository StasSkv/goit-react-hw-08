import { Formik, Form } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'The name is too short!')
    .max(50, 'The name is too long!')
    .required('Required field'),
  number: Yup.string()
    .min(3, 'The number is too short!')
    .max(20, 'The number is too long!')
    .required('Required field'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    dispatch(addContact({ name, number }));
    resetForm();
    document.activeElement?.blur();
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, mr:0, ml: 0 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Створити новий контакт
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="Імʼя"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              margin="normal"
              id="number"
              name="number"
              label="Номер телефону"
              type="tel"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#f0f0f0',
                color: 'black',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'green',
                  color: '#f0f0f0',
                },
              }}
            >
              Додати контакт
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
