import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();

  const { coins } = location.state;
  console.log(coins);

  return (
    <div>
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
        {coins.percent_change_1h}
      </p>
      <p>
        %_change(day):
        {coins.percent_change_24h}
      </p>
      <p>
        %_change(week):
        {coins.percent_change_24h}
      </p>
    </div>
  );
};

export default DetailsPage;
