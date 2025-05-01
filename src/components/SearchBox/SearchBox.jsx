import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchInput" className={css.searchBoxLabel}>
        Find contacts by name
      </label>
      <input id="searchInput" type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
