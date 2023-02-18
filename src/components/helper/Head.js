/* eslint-disable no-undef */
import React from 'react';

function Head(props) {
  React.useEffect(() => {
    document.title = `${props.title} | Dogs`;
    document.querySelector("meta[name='description']")
      .setAttribute('content', props.descripion || '');
  }, [props]);
}

export default Head;
