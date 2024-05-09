import classes from './ItemsInCart.module.css';
import { itemsInShoppingCart } from '../../../Data';
import { DeleteOutlined, AddOutlined, RemoveOutlined } from '@mui/icons-material'; 

const ItemsInCart = () => {
  return (
    <div className={classes['container']}>
        <ul>
            {itemsInShoppingCart.map(item => (
                <li>
                    <div className={classes['item-container']}>
                        <div className={classes['left']}>
                            <img src={item.url} alt='small-preview' />
                        </div>
                        <div className={classes['middle-right-container']}>
                            <div className={classes['middle']}>
                                <div>
                                    <h3>Product:&nbsp; </h3>
                                    <h3>{item.product}</h3>
                                </div>
                            </div>
                            <div className={classes['right']}>
                                <div>
                                    <h3>Quantity:&nbsp; </h3>
                                    <div className={classes['quantity-selection']}>
                                        <button><RemoveOutlined /></button>
                                        <span>{item.quantity}</span>
                                        <button><AddOutlined /></button>
                                    </div>
                                </div>
                                <div>
                                    <h3>Price:&nbsp; </h3>
                                    <h3>USD$ {item.price}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes['remove-item']}><DeleteOutlined /></div>
                    <hr/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ItemsInCart;