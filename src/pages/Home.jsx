import { useState, useEffect } from "react";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSort } from "../store/slices/filterSlice";

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { categoryId, sort } = useSelector((state) => state.filter)
  const dispatch = useDispatch()


  useEffect(() => {
    setIsLoaded(false);
    fetch(
      `https://e84f8253e3776458.mokky.dev/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sort.sortProperty}&title=*${searchValue}
    `
    )
      .then((responce) => {
        return responce.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoaded(true);
      });
  }, [categoryId, sort, searchValue]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          setCategoryId={(i) => dispatch(setCategoryId(i))}
        />
        <Sort sort={sort} onChangeSort={(obj) => dispatch(setSort(obj))} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoaded
          ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />)
          : items.filter(obj => obj.title.toLocaleLowerCase().includes(searchValue) ).map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>
    </div>
  );
};

export default Home;
