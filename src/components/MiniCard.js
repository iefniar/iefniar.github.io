import classes from './MiniCard.module.css';
import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from '@mui/icons-material';

const MiniCard = ({image}) => {
  return (
    <div className={classes['container']}>
        <img src={image} alt='small-preview' />
        <div className={classes['group-container']}>
          <div><SearchOutlined /></div>
          <div><ShoppingCartOutlined /></div>
          <div><FavoriteBorderOutlined /></div>
        </div>
    </div>
  );
}

export default MiniCard;