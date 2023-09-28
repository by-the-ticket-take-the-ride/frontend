import './FilterCheckbox.css';

function FilterCheckbox({ handleChange, checked = true }) {
  return ( 
    <div className='filter-checkbox filter-checkbox_size_l filter-checkbox_size_s'>
      <input 
        className='filter-checkbox__input' 
        type='checkbox' 
        id='autograph'
        onChange={handleChange} 
        name='autograph'
        checked={checked || ''}
      />
      <label className='filter-checkbox__label' htmlFor='autograph'></label>
    </div>
   );
}

export default FilterCheckbox;