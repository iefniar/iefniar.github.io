import classes from './ItemsPage.module.css';
import NavBar from './pageSections/NavBar';
import Items from './pageSections/Items';
import Footer from './pageSections/Footer';
import { allItems } from '../../Data';
import { useState } from 'react';

const ItemsPage = () => {
  const itemsCopy = [...allItems];
  /*const filteredItems = [...itemsCopy.filter(item => item.category === 'trending male' || item.category === 'trending male and female' || item.category === 'trending female')];*/
  const [filteredItems, setFilteredItems] = useState(itemsCopy.filter(item => item.category === 'trending male' || item.category === 'trending male and female' || item.category === 'trending female'));
  const [selectedCategory, setSelectedCategory] = useState('trending');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);

    if (event.target.value === 'trending') {
      setFilteredItems(itemsCopy.filter(item => item.category === 'trending male' || item.category === 'trending male and female' || item.category === 'trending female'));
    }
    else {
      setFilteredItems(itemsCopy.filter(item => item.category === event.target.value));
    }
  };

  return (
    <>
      <NavBar />
      <div className={classes['main-container']}>
        <h2>Trending now</h2>
        <div className={classes['filtering-area']}>
          <label htmlFor='category-select'>Filter by:</label>
          <select id='category-select' value={selectedCategory} onChange={handleChange}>
            <option value='' disabled>Category</option>
            <option value='trending'>Trending</option>
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

  );
}

export default ItemsPage;