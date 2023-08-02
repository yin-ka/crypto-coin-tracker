import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoins } from '../redux/home/homeSlice';

const Home = () => {
  const { isLoading, coins } = useSelector((store) => store.home);
  console.log(isLoading, coins);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === false) dispatch(fetchCoins());
  }, [isLoading, dispatch]);

  if (isLoading) {
    <div>
      <h1>Loading...</h1>
    </div>;
  }

  return (
    <>
      <h1>Digital Coin Explorer</h1>
      <div>
        {coins.map((coin) => {
          const { id, symbol, percent_change_1h: hour } = coin;
          console.log(coin);
          return (
            <button type="button" key={id}>
              <h3>{symbol}</h3>
              <p>{hour}</p>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Home;
