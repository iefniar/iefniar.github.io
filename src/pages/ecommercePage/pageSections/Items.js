import classes from './Items.module.css';
import MiniCard from '../../../components/MiniCard';
import { outfits } from '../../../Data';

const Items = () => {
  return (
    <div className={classes.container}>
        <div className={classes.collection}>
            <ul>
                {outfits.map(item => (
                    <li key={item.id}>< MiniCard image={item.url} /></li>
                )
                )}
            
            </ul>
        </div>

    </div>
  );
}

export default Items;