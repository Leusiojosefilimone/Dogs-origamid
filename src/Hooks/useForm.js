import React from 'react';

const types = {
  email: {
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    msg: 'preencha um email valido',
  },
};
const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [Error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preecha um valor');
      return false;
    } if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].msg);
      return false;
    }
    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (Error) {
      console.log(Error);
      validate(value);
    }
    setValue(target.value);
  }

  return {
    Error,
    value,
    validate: () => validate(value),
    onBlur: () => validate(value),
    setValue,
    onChange,
  };
};
export default useForm;
