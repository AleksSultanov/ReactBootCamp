import classes from "./styles.module.css";

export function Maket({
  description = "",
  buttontextr = "",
  buttontextl = "",
  title = "",
}) {

  return (
    <div className={classes.maket}>
      <div className={classes.boxtile}>
        <p className={classes.title}>{title}</p>
      </div>
      <div className={classes.boxtile}>
        <span className={classes.description}>{description}</span>
      </div>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{formattedText}</p>
    </div>
  );
}
