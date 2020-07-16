import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import MaskedInput from 'react-text-mask'

const hexRegEx = /[A-Za-z0-9_]/;

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
        hexRegEx,
      ]}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};
export default function Index() {
  const [ id, setId ] = useState('');
  const handleOnChangeId = (e) => {
    setId(e.target.value)
  }
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          KevMikaElmer TextField Testing
        </Typography>
        <OutlinedInput
          value={id}
          onChange={handleOnChangeId}
          fullWidth
          margin="dense"
          inputComponent={TextMaskCustom}
        />
      </Box>
    </Container>
  );
}
