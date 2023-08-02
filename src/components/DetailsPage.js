import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaChevronDown, FaChevronUp, FaBitcoin } from 'react-icons/fa';
import styles from '../styles/Details.css';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  const { coins } = location.state || { coins: {} };

  return (
    <div>
      <div>
        <BiArrowBack onClick={() => backHome()} className={styles.icon} />
      </div>
      <div className={styles.container}>
        <h1 className={styles.name}>
          {coins.name}
          {' '}
          (
          {coins.symbol}
          )
        </h1>
        <div className={styles.coin}>
          <p className={styles.cap}>
            market cap: $
            {Number(coins.market_cap_usd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className={styles.volume}>
            volume(24h): $
            {Number(coins.volume24a).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className={styles.btc}>
            price(btc):
            <span className={styles.span}>
              {' '}
              <FaBitcoin />
              {' '}
              {coins.price_btc}
            </span>
          </p>
          <p className={styles.usd}>
            price(usd): $
            {Number(coins.price_usd).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
          <p className={styles.hour}>
            1h %:
            {' '}
            {coins.percent_change_1h < 0 ? (
              <span className={styles.span}>
                <FaChevronDown color="red" />
                {Math.abs(coins.price_btc)}
              </span>
            ) : (
              <span className={styles.span}>
                <FaChevronUp color="green" />
                {Math.abs(coins.price_btc)}
              </span>
            )}
          </p>
          <p className={styles.day}>
            24h %:
            {' '}
            {coins.percent_change_24h < 0 ? (
              <span className={styles.span}>
                <FaChevronDown color="red" />
                {Math.abs(coins.price_btc)}
              </span>
            ) : (
              <span className={styles.span}>
                <FaChevronUp color="green" />
                {Math.abs(coins.price_btc)}
              </span>
            )}
          </p>
          <p className={styles.week}>
            7d %:
            {' '}
            {coins.percent_change_24h < 0 ? (
              <span className={styles.span}>
                <FaChevronDown color="red" />
                {Math.abs(coins.price_btc)}
              </span>
            ) : (
              <span className={styles.span}>
                <FaChevronUp color="green" />
                {Math.abs(coins.price_btc)}
              </span>
            )}
          </p>
          <p className={styles.supply}>
            volume(24h):
            {' '}
            {Number(coins.tsupply).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
