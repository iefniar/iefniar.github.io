import classes from './Items.module.css';
import MiniCard from '../../../components/MiniCard';
import { allItems } from '../../../Data';

const Items = () => {
  return (
    <div className={classes.container}>
        <ul className={classes.collection}>
            {allItems.map(item => (
                <li key={item.id}>
                  < MiniCard  
                    id={item.id} 
                    url={item.url} 
                    product={item.product} 
                    price={item.price} 
                  />
                </li>
              )
            )}
        </ul>
    </div>
  );
}

export default Items;