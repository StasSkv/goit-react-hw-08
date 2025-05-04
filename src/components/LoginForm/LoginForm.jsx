import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  email: Yup.string().email('Невірний email').required("Обов'язкове поле"),
  password: Yup.string().min(6, 'Мінімум 6 символів').required("Обов'язкове поле"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { accept, ...formData } = values;
    dispatch(logIn(formData));
    logIn();
  };

  return (
    <Box className={s.wrapper}>
      <Paper elevation={6} className={s.formCard}>
        <Typography variant="h4" className={s.title} gutterBottom>
          Вхід
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form noValidate>
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

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
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
                Увійти
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default LoginForm;
