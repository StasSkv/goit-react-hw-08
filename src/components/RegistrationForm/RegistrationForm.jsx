import React from 'react';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string().required("Обов'язкове поле"),
  email: Yup.string().email('Невірний email').required("Обов'язкове поле"),
  password: Yup.string().min(7, 'Мінімум 7 символів').required("Обов'язкове поле"),
  accept: Yup.boolean().oneOf([true], 'Потрібно прийняти умови'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    accept: false,
  };

  const handleSubmit = (values, { resetForm }) => {
    const { accept, ...formData } = values;    
    dispatch(register(formData));
    resetForm();
  };

  return (
    <Box className={s.wrapper}>
      <Paper elevation={6} className={s.formCard}>
        <Typography variant="h4" className={s.title} gutterBottom>
          Реєстрація
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form noValidate>
              <TextField
                label="Ім'я"
                name="name"
                fullWidth
                margin="normal"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Пароль"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="accept"
                    checked={values.accept}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Я погоджуюсь з умовами"
              />
              {touched.accept && Boolean(errors.accept) && (
                <Typography color="error" variant="caption">
                  {errors.accept}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                className={s.btn}
                sx={{
                  mt: 3,
                  borderRadius: 2,
                  py: 1.5,
                  backgroundColor: 'rgb(0, 128, 0)',
                  '&:hover': {
                    backgroundColor: 'rgb(0,150,0)',
                  },
                }}
              >
                Зареєструватися
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default RegistrationForm;
