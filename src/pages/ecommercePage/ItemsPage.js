import classes from './ItemsPage.module.css';
import NavBar from './pageSections/NavBar';
import Items from './pageSections/Items';
import Footer from './pageSections/Footer';
import { allItems } from '../../Data';

const ItemsPage = () => {
  const itemsCopy = [...allItems];
  const filteredItems = [...itemsCopy.filter(item => item.category === 'trending male')];

  return (
    <>
        <NavBar />
        <div className={classes['main-container']}>
            <h2>Trending now</h2>
            <div className={classes['filtering-area']}>
                <label htmlFor='category-select'>Filter by:</label>
                <select id='category-select'>
                    <option value='' disabled>Category</option>
                    <option value='trending' selected>Trending</option>
                    <option value='outfits'>Outfits</option>
                    <option value='shoes'>Shoes</option>
                    <option value='sunglasses'>Sunglasses</option>
                    <option value='t-shirts'>T-shirts</option>
                    <option value='watches'>Watches</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                </select>
            </div>
            <Items itemsArray={filteredItems} />
        </div>
        <Footer />
    </>
 
  )
}

export default ItemsPage;