import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { fetchCoins } from '../redux/home/homeSlice';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [search, setSearch] = useState('');

  const { isLoading, coins } = useSelector((store) => store.home);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const details = (coins) => {
    navigate(`/details/${coins.name}`, { state: { coins } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isLoading === false) dispatch(fetchCoins());
  }, [isLoading, dispatch]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>CRYPTO COIN TRACKER</h1>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
          />
          <button
            type="submit"
            className={styles.searchIcon}
            onClick={handleSubmit}
          >
            <BsSearch />
          </button>
        </form>
      </div>
      <div className={styles.topcontainer}>
        <p className={styles.top}>stats by coin</p>
      </div>
      <div className={styles.coinContainer}>
        {coins
          .filter((coin) => {
            const { symbol } = coin;
            return search.toLowerCase() === ''
              ? coin
              : symbol.toLowerCase().includes(search.toLowerCase());
          })
          .map((coin) => {
            const { id, symbol, percent_change_1h: hour } = coin;
            return (
              <button
                type="button"
                key={id}
                onClick={() => details(coin)}
                className={styles.btn}
              >
                <h3>{symbol}</h3>
                <div>
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
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
