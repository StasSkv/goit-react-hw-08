import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The name is too short!')
    .max(50, 'The name is too long!')
    .required('Required field'),
  number: Yup.string()
    .min(3, 'The number is too short!')
    .max(20, 'The number is too long!')
    .required('Required field'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }));
    resetForm();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name <Field className={css.input} type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>

        <label htmlFor="number" className={css.label}>
          Number <Field className={css.input} type="tel" name="number" id="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button type="submit" className={css.btnAddUser}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
