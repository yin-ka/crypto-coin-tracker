import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { fetchCoins } from '../redux/home/homeSlice';
import styles from '../styles/Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const { isLoading, coins } = useSelector((store) => store.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const details = (coins) => {
    navigate(`/details/${coins.name}`, { state: { coins } });
  };

  useEffect(() => {
    if (isLoading === false) dispatch(fetchCoins());
  }, [isLoading, dispatch]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1>Crypto Coin Tracker</h1>
      <form>
        <input
          type="text"
          placeholder="search coins"
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />
      </form>
      <div className={styles.coinContainer}>
        {coins
          .filter((coin) => {
            const { symbol } = coin;
            return search.toLowerCase() === ''
              ? coin
              : symbol.toLowerCase().includes(search);
          })
          .map((coin) => {
            const { id, symbol, percent_change_1h: hour } = coin;
            // console.log(coin);
            return (
              <button
                type="button"
                key={id}
                onClick={() => details(coin)}
                className={styles.btn}
              >
                <h3>{symbol}</h3>
                <p>
                  {hour < 0 ? (
                    <span className={styles.span}>
                      <FaChevronDown color="red" />
                      {Math.abs(hour)}
                    </span>
                  ) : (
                    <span className={styles.span}>
                      <FaChevronUp color="green" />
                      {Math.abs(hour)}
                    </span>
                  )}
                </p>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
