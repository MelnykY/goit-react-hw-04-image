import { ColorRing } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = visible => {
  return (
    <Container>
      <ColorRing
        visible={visible}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%)',
        }}
        wrapperClass="blocks-wrapper"
        colors={['#24045a', '#600fe2', '#945eeb', '#c2abe9', '#f1f1f1']}
      />{' '}
    </Container>
  );
};

export default Loader;
