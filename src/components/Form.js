import React from 'react';
import './css/form.css';

const Form = ({value, onChange, onCreate, onKeyPress})=>{
  return (
    <div className='form'>
      <input type="text" value={value} onChange={onChange} onkeyPress={onKeyPress} />
      <button onClick={onCreate}>
        추가하기
      </button>
    </div>
  );
}

export default Form