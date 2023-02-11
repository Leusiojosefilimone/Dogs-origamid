import React from 'react';

const types = {
  email: {
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    msg: 'preencha um email valido',
  },
  password: {
    regex: /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
    msg: 'Asenha deve possuir no mínimo 8 caracteres, pelomenos 1 letra maiúscula, 1 minúscula, e um digito',
  },
  number: {
    regex: /^\d+$/,
    msg: 'utilize apenas numeros',
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
