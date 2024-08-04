import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '..//..//redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value.toLowerCase()));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.textSearch}>Find contacts by name</p>
      <input type="text" onChange={handleChange} className={css.input} />
    </div>
  );
};

export default SearchBox;

