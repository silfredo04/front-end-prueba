import React, { useState } from 'react'

export const useForms = (initialObj = {}) => {

  const [form, setForm] = useState(initialObj);

  const cambiado = ({target}) =>{
    const {name, value} = target;

    setForm({
        ...form,
        [name]:value
    })

  }

  return {
    form,
    cambiado
  };
}
