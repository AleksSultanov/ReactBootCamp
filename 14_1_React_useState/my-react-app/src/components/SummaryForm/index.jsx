import { useState, useRef } from 'react';

import { Field } from '../ui/Field/index.jsx';
import { Button } from '../ui/Button/index.jsx';
import classes from './styles.module.css';

export function SummaryForm() {
  const {message, setMessage} =  useState('');
  const isButtonDisabled = true;
  const formRef = useRef();

  const [name, setName] = useState('');
  const [shortName, setShortName] = useState('');
  const [anotherName, setAnotherName] = useState('');

  function setNameHandler(event) {
    setName(event.target.value);
  }

  function setShortNameHandler(event) {
    setShortName(event.target.value);
  }

  function setAnotherNameHandler(event) {
    setAnotherName(event.target.value);
  }

  function clearFields() {
    setName('');
    setShortName('');
    setAnotherName('');
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(formRef.current);
    console.log(name, shortName, anotherName);
    clearFields();
  }

  console.log('render');

  return (
    <div className={classes.form}>
      <h1 className={classes.title}>Общая информация</h1>
      <form onSubmit={onSubmit} ref={formRef}>
        <Field
          value={name}
          onChange={setNameHandler}
          label="Наименование"
          fullWidth
        />
        <div className="flex">
          <Field
            label="Краткое наименование"
            value={shortName}
            onChange={setShortNameHandler}
          />
          <Field
            label="Наименование латиницей"
            value={anotherName}
            onChange={setAnotherNameHandler}
          />
        </div>
        {isButtonDisabled && (
          <div className="flex justify-center">
            <Button disabled>назад</Button>
            <Button>далее</Button>
          </div>
        )}
      </form>
    </div>
  );
}
