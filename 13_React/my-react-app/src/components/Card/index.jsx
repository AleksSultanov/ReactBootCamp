import classes from "./styles.module.css";

export function Card({
  description = "",
  tag = "",
  title = "",
  isLiked = false,
}) {
  const textLength = 150;
  const slicedText = description.substring(0, textLength);
  const formattedText =
    description.length > textLength ? `${slicedText} далее...` : description;
  const likeIconClasses = isLiked
    ? `${classes.likeIcon} ${classes.active}`
    : classes.likeIcon;

  const tagColors = {
    green: {
      text: "Знакомства",
      color: "green",
    },
    blue:  {
      text: "Эмоции",
      color: "blue",
    },
    violet: {
      text: "Универсальные",
      color: "#C56EDA",
    },
  };
  console.log(tag);
  return (
    <div className={classes.card}>
      <div className={classes.head}>
        <div 
          className={classes.tag}
           style ={{
             backgroundColor : tagColors[tag].color,
           }} 
        >
        {tagColors[tag].text}
        </div>   
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={likeIconClasses}
        >
          <path
            opacity="0.82"
            d="M10.9328 19.6777L10.9314 19.6763C7.82127 16.8587 5.32103 14.5911 3.58627 12.4721C1.86297 10.3671 1 8.53116 1 6.59401C1 3.4545 3.45543 1 6.6 1C8.38555 1 10.1146 1.83534 11.2389 3.1544L12 4.04731L12.7611 3.1544C13.8854 1.83534 15.6144 1 17.4 1C20.5446 1 23 3.4545 23 6.59401C23 8.53118 22.137 10.3672 20.4135 12.4739C18.6788 14.5943 16.1788 16.8645 13.0691 19.6879C13.0686 19.6883 13.0682 19.6887 13.0678 19.6891L12.0026 20.6506L10.9328 19.6777Z"
            stroke="#403D44"
            strokeWidth="2"
          />
        </svg>  
      </div>   
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{formattedText}</p>   
    </div>  
  );
}
