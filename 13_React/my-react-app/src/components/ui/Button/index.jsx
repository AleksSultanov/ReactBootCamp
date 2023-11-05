// import { Children } from "react";
import classes from "./styles.module.css";

export function Button ({
    children, active
}) {
    return (
    <button className={`${classes.button} ${active && classes.active}`}>
        {children}
    </button>
    )
}
