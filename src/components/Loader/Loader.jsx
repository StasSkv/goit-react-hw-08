import { BeatLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Loader = ({loading = true}) => {
  return (
    <BeatLoader
      color="#000000"
      loading={loading}
      cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
