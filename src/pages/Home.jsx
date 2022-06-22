import React from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import { useSelector, useDispatch } from 'react-redux';
import {setCategory, setSortBy} from '../redux/action/filters'

import { fetchPizzas } from "../redux/action/pizzas";

const categoriesNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];

const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавит', type: 'alphabet'},
 ];


function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  },[category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[]);
    
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  },[]);

  return (
    <div className="container">
    <div className="content__top">
      <Categories
      activeCategory={category}
      onClickCategory = {onSelectCategory}
      items={categoriesNames}/>
     <SortPopup activeSortType={sortBy} items = {sortItems} onSelectSortType={onSelectSortType}/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded ? items.map((obj) => (<PizzaBlock key={obj.id} isLoading={true} {...obj}/>)) 
          : Array(12)
          .fill(0)
          .map((_, index) => <PizzaLoadingBlock key={index}/>)  
        }
        
      </div>
  </div>
  )
  }


export default Home