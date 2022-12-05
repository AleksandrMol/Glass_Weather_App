import React from 'react';
import './locationform.css';

interface ILocationFormProps{
  name: string,
  placeholder?: string,
  label?: string,
  icon?: React.ReactNode,
  onSubmit: (e:React.FormEvent) => void,
  required?: boolean,
}

export function LocationForm({name, placeholder, label, icon, onSubmit, required}:ILocationFormProps) {

  const searchHandle = (e:React.FormEvent) => {
    e.preventDefault();

    const inputEl = document.querySelector(`#${name}`) as HTMLInputElement;
    if (inputEl.value !== '') {
      onSubmit(e);
    }
  }

  return (
    <form className='location-form' action="" onSubmit={onSubmit}>
      <label className='location-label' htmlFor={name}>
        {label}
      </label>
      <input required = {required} className='location-input' type="text" id={name} name={name} placeholder={placeholder}/>
      <div className='location-form-icon' onClick={searchHandle}>
        {icon}
      </div>
    </form>
  );
}
