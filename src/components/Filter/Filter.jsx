import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterLabel>
  );
};
