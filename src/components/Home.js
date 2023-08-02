import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { fetchCoins } from '../redux/home/homeSlice';

const Home = () => {
  const { isLoading, coins } = useSelector((store) => store.home);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const details = (coins) => {
    navigate(`/details/${coins.name}`, { state: { coins } });
  };

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

          return (
            <button type="button" key={id} onClick={() => details(coin)}>
              <h3>{symbol}</h3>
              <p>
                {hour <= 0 ? (
                  <>
                    <FaChevronDown color="red" />
                    {Math.abs(hour)}
                  </>
                ) : (
                  <>
                    <FaChevronUp color="green" />
                    {Math.abs(hour)}
                  </>
                )}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Home;
