import classes from './Items.module.css';
import MiniCard from '../../../components/MiniCard';
import { outfits } from '../../../Data';

const Items = () => {
  return (
    <div className={classes.container}>
        <ul className={classes.collection}>
            {outfits.map(item => (
                <li key={item.id}>< MiniCard imagePath={item.url} /></li>
              )
            )}
        </ul>
    </div>
  );
}

export default Items;