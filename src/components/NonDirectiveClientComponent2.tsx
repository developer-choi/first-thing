import {useEffect, useState} from 'react';

export default function NonDirectiveClientComponent() {
  const [value, setValue] = useState('2');

  useEffect(() => {
    setTimeout(() => {
      setValue('4');
    }, 500);
  }, []);

  return (
    <div>value = {value}</div>
  );
}
