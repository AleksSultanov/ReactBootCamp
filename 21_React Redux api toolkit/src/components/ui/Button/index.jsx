import classNames from 'classnames';
import classes from './styles.module.css';

export function Button({ children, onClick, disabled }) {
  return (
    <button
      className={classNames(classes.button)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
