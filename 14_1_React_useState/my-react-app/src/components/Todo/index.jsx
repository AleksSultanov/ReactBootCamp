import "./styles.css";

export function Todo() {
  const isActive = false;

  return <h1 className={`${isActive ? "active" : ""} title`}>Todo</h1>;
}
