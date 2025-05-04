import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Пошук
      </Typography>

      <Formik
        initialValues={{
          searchType: 'name',
          query: filter?.name || '',
        }}
        onSubmit={({ searchType, query }) => {
             console.log('Submitted data:', { searchType, query });
          dispatch(changeFilter({ type: searchType, value: query }));
        }}
      >
        {({ values, setFieldValue }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <FormControl sx={{ minWidth: 120 }} fullWidth>
              <InputLabel id="search-type-label">Пошук за</InputLabel>
              <Select
                labelId="search-type-label"
                id="searchType"
                name="searchType"
                value={values.searchType}
                onChange={(e) => {
                  const newType = e.target.value;
                  setFieldValue('searchType', newType);
                  setFieldValue('query', filter?.[newType] || '');
                }}
              >
                <MenuItem value="name">Імʼям</MenuItem>
                <MenuItem value="number">Номером</MenuItem>
              </Select>
            </FormControl>

            <Field
              as={TextField}
              name="query"
              type="text"
              label={values.searchType === 'name' ? 'Введіть імʼя' : 'Введіть номер'}
              variant="outlined"
              fullWidth
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
              Знайти
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SearchBox;
