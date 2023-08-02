import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const backHome = () => {
    navigate('/');
  };

  const { coins } = location.state;
  console.log(coins);

  return (
    <div>
      <BiArrowBack onClick={() => backHome()} />
      <h1>
        {coins.name}
        {' '}
        (
        {coins.symbol}
        )
      </h1>
      <p>
        price(btc):
        {coins.price_btc}
      </p>
      <p>
        price(usd):
        {coins.price_usd}
      </p>
      <p>
        %_change(hr):
        {coins.percent_change_1h < 0 ? (
          <>
            <FaChevronDown color="red" />
            {Math.abs(coins.price_btc)}
          </>
        ) : (
          <>
            <FaChevronUp color="green" />
            {Math.abs(coins.price_btc)}
          </>
        )}
      </p>
      <p>
        %_change(day):
        {coins.percent_change_24h < 0 ? (
          <>
            <FaChevronDown color="red" />
            {Math.abs(coins.price_btc)}
          </>
        ) : (
          <>
            <FaChevronUp color="green" />
            {Math.abs(coins.price_btc)}
          </>
        )}
      </p>
      <p>
        %_change(week):
        {coins.percent_change_24h < 0 ? (
          <>
            <FaChevronDown color="red" />
            {Math.abs(coins.price_btc)}
          </>
        ) : (
          <>
            <FaChevronUp color="green" />
            {Math.abs(coins.price_btc)}
          </>
        )}
      </p>
    </div>
  );
};

export default DetailsPage;
