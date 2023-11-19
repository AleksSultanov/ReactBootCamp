import cn from 'classnames';
import classes from './styles.module.css';

export function Field({
  label,
  fullWidth,
  value,
  onChange,
  type = 'text',
  name = '',
}) {
  return (
    <div
      className={cn(classes.field, {
        [classes.fullWidth]: fullWidth,
      })}
    >
      <label className={classes.label}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={classes.input}
        type={type}
      />
    </div>
  );
}
