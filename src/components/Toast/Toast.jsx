import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ message }) => {
  if (message) {
    toast.error(message);
  }
  return null;
};

export default Toast;
