import { Formik } from 'formik';
import { Header, SearchForm, SearchFormBtn, Input } from './Searchbar.styled';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          const { name } = values;
          if (!name.trim()) {
            return;
          }
          onSubmit(name.trim());
          actions.resetForm();
        }}
      >
        {props => (
          <SearchForm onSubmit={props.handleSubmit}>
            <SearchFormBtn type="submit" aria-label="search">
              <GoSearch />
            </SearchFormBtn>

            <Input
              type="text"
              name="name"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        )}
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
