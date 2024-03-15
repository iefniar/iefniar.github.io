import classes from "./MainContent.module.css";
import Card from "./Card";
import Button from "./Button";
import {ArrowRightOutlined} from "@mui/icons-material";
import ProfilePicture from '../img/profile-picture.png';

const MainContent = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        <Button text="Contactanos"/>
        <div className={classes['card-collection']}>
          <Card image={ProfilePicture} icon={<ArrowRightOutlined />} />
        </div>
        <Button text="Ver mas" />
      </div>
    </div>
  );
}

export default MainContent;