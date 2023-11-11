import { useState, useRef } from 'react';
import { Field } from '../ui/Field/index.jsx';
import { Button } from '../ui/Button/index.jsx';

import classes from './styles.module.css';
import { Title } from './styles';

import { Dropdown } from './../ui/Dropdown';

export function SummaryForm() {
  const isButtonDisabled = true;
  const formRef = useRef();

  // const [name, setName] = useState('');
  // const [shortName, setShortName] = useState('');
  // const [anotherName, setAnotherName] = useState('');

  const [formState, setFormState] = useState({
    name: '',
    shortName: '',
    anotherName: '',
  });

  function setField(key, value) {
    setFormState({
      ...formState,
      [key]: value,
    });
  }

  function setFieldHandler(event) {
    const { name, value } = event.target;

    setField(name, value);
  }

  function setNameHandler(event) {
    setField('name', event.target.value);
  }

  function setShortNameHandler(event) {
    setField('shortName', event.target.value);
  }

  function setAnotherNameHandler(event) {
    setField('anotherName', event.target.value);
  }

  function clearFields() {
    setFormState({
      name: '',
      shortName: '',
      anotherName: '',
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(formRef.current);
    // console.log({ name, shortName, anotherName });
    clearFields();
  }

  return (
    <div className={classes.form}>
      <Title color="red" active>
        Общая информация
      </Title>
      <form onSubmit={onSubmit} ref={formRef}>
        <Field
          name="name"
          value={formState.name}
          onChange={setFieldHandler}
          label="Наименование"
          fullWidth
        />
        <div className="flex">
          <Field
            name="shortName"
            label="Краткое наименование"
            value={formState.shortName}
            onChange={setFieldHandler}
          />
          <Field
            name="anotherName"
            label="Наименование латиницей"
            value={formState.anotherName}
            onChange={setFieldHandler}
          />
        </div>
        <div className="flex">
          <Dropdown label="Первый" />
          <Dropdown label="Второй" />
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
