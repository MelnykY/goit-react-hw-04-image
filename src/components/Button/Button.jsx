import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return <ButtonLoadMore onClick={onClick}>Load more</ButtonLoadMore>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
