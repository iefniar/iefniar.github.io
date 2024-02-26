import classes from "./MainContent.module.css";
import Card from "./Card";
import Button from "./Button";
import {RocketOutlined, ArrowDropDownOutlined} from "@mui/icons-material";
import Flag from "../img/pexels-antonio-borriello-15831682.jpg";
import DoctorWriting from "../img/pexels-rdne-stock-project-6129043.jpg";
import Doctors from "../img/pexels-rdne-stock-project-6129507.jpg";

const MainContent = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.navBar}>
        <h4>MEDICAL CENTER</h4>
        <h4>Nuestra Compañia</h4>
        <h4>Nuestros Servicios</h4>
        <div>
          <img src={Flag} alt="flag"/>
          <span><ArrowDropDownOutlined /></span>
        </div>
        <h4>Contactanos</h4>
        <h4>Portal de pacientes</h4>
      </div>
      <div className={classes.content}>
        <div className={classes['image-top']}>
          <img src={DoctorWriting} alt="doctor writing"/>
          <div className={classes.headline}>
            <h1>Tu bienestar es</h1>
            <h1>nuestra prioridad</h1>
            <Button text="Contactanos"/>
            <div className={classes['card-collection']}>
              <Card icon={<RocketOutlined />} headlineTop="hehkhe eknek nek"  headlineBottom="botootm headliuenn df" text="loremewewjhj ehwjehwjewhejwh hejweh wjehwj ewjewje"/>
              <Card icon={<RocketOutlined />} headlineTop="hehkhe eknek nek"  headlineBottom="botootm headliuenn df" text="loremewewjhj ehwjehwjewhejwh hejweh wjehwj ewjewje"/>
              <Card icon={<RocketOutlined />} headlineTop="hehkhe eknek nek"  headlineBottom="botootm headliuenn df" text="loremewewjhj ehwjehwjewhejwh hejweh wjehwj ewjewje"/>
              <Card icon={<RocketOutlined />} headlineTop="hehkhe eknek nek"  headlineBottom="botootm headliuenn df" text="loremewewjhj ehwjehwjewhejwh hejweh wjehwj ewjewje"/>
            </div>
          </div>
        </div>
        <section className={classes.middle}>
          <h1>Explora todos nuestros servicios</h1>
          <Button text="Ver mas" />
          <div className={classes['content-area']}>
            <div className={classes['mini-photo']}>
              <img src={Doctors } alt="doctors"></img>
            </div>
            <div className={classes['text-right-side']}>
              <h2>Servicios DOT</h2>
              <h4>Lorem djkjkdfjdk fjdkf jdfkdjfkd fiejf eorieori weuwioeuwoi rieorie pfioe duedvvf ni j fyf hhih jioj vf hiuo fdjfkdjfkd fj fjdk fdjf fkdjfdk fjk wjhkf jl wjfkwjflwj lw fwjlf wlf wlfw fwjf wlfj wlf wlf wlf wljflw juogrtrgrojg ruogr gru gyureyurye lfhkehkfehkfe ejfkejfekf ehlgkeghefhe flefjwklj wjdfwflw wjlkjklhilyt ueteute ur eproeirepore rio por ipriw rwip iopreir eiropei</h4>
            </div>
          </div>
          <Button text="Ver mas" />
        </section>
        <section className={classes.footer}>
            <div className={classes['curve-footer']}></div>
            <div className={classes['footer-content']}>
              <div className={classes['footer-top']}>
                <h4>MEDICAL CENTER</h4>
                <h4>Nuestra Compañia</h4>
                <h4>Nuestros Servicios</h4>
                <div>
                  <img src={Flag} alt="flag"/>
                  <span><ArrowDropDownOutlined /></span>
                </div>
                <h4>Contactanos</h4>
              </div>
              <div className={classes['footer-bottom']}>
                <h4>2024 MEDICAL CENTER</h4>
                <h4>Todos los derechos reservados</h4>
              </div>
            </div> 
        </section>
      </div>
    </div>
    
  );
}

export default MainContent;