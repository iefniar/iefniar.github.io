import classes from './ItemsPage.module.css';
import NavBar from './pageSections/NavBar';
import Items from './pageSections/Items';
import Footer from './pageSections/Footer';

const ItemsPage = () => {
  return (
    <>
        <NavBar />
        <div className={classes['main-container']}>
            <h2>Trending now</h2>
            <div className={classes['filtering-area']}>
                <label htmlFor='category-select'>Filter by:</label>
                <select id='category-select'>
                    <option value='' selected disabled>Category</option>
                    <option value='outfits'>Outfits</option>
                    <option value='shoes'>Shoes</option>
                    <option value='sunglasses'>Sunglasses</option>
                    <option value='t-shirts'>T-shirts</option>
                    <option value='watches'>Watches</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                </select>
            </div>
            <Items />
        </div>
        <Footer />
    </>
 
  )
}

export default ItemsPage;