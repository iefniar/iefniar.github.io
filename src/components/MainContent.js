import classes from "./MainContent.module.css";
import Button from "./Button";

const MainContent = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        <Button text="Contactanos"/>
        <Button text="Ver mas" />
      </div>
    </div>
  );
}

export default MainContent;