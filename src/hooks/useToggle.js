import { useState } from 'react';

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);

  const toggleState = e => {
    setState(!state);
  };

  return [state, toggleState];
};
export default useToggle;
