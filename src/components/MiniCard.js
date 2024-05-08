import classes from './MiniCard.module.css';
import { SearchOutlined, ShoppingBagOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MiniCard = ({imagePath}) => {
  return (
    
      <div className={classes['container']}>
          <img src={imagePath} alt='small-preview' />
          <div className={classes['group-container']}>
            <Link to='/project-1/individual-item'>
              <div>   
                <SearchOutlined />
              </div>
            </Link>
            <div><ShoppingBagOutlined /></div>
            <div><FavoriteBorderOutlined /></div>
          </div>
      </div>
    
  );
}

export default MiniCard;