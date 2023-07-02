import PropTypes from "prop-types";
import { RxMagicWand } from "react-icons/rx";
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filterValue, filteringMethod }) => (
  <FilterContainer >
    <FilterLabel >
      <RxMagicWand /> Accio contacts by name
      <FilterInput type="text" name="search" 
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Use only letters, apostrophe, dash and spaces."        
        value={filterValue} onChange={filteringMethod}
      />      
    </FilterLabel>
  </FilterContainer>
)

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filteringMethod: PropTypes.func.isRequired,  
};

export default Filter;