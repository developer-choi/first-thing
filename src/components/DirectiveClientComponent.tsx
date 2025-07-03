'use client';

import {useEffect, useState} from 'react';

export default function NonDirectiveClientComponent() {
  const [value, setValue] = useState('1');

  useEffect(() => {
    setTimeout(() => {
      setValue('2');
    }, 500);
  }, []);

  return (
    <div>value = {value}</div>
  );
}
