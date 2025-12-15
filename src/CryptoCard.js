export default function CryptoCard(props) {
  const { crypto, cryptoIndex } = props;

  function USDPrice(coin) {
    return "$" + Number(coin).toFixed(4);
  }

  return (
    <div className="cards">
      <div className="card">
        <div className="nameImage">
          <h3>{crypto.item.name}</h3>
          <div className="image">
            <img src={crypto.item.small} alt="Crypto" />
          </div>
        </div>

        <div className="infos">
          <div className="price">
            <p>Price: {USDPrice(crypto.item.data.price)}</p>
          </div>
          <div className="change">
            <p
              className={
                crypto.item.data.price_change_percentage_24h.aed &&
                crypto.item.data.price_change_percentage_24h.aed >= 0
                  ? "green"
                  : "red"
              }
            >
              Change:
              {crypto.item.data.price_change_percentage_24h.aed.toFixed(5)}
            </p>
          </div>
        </div>

        <div className="sparkline">
          <img src={crypto.item.data.sparkline} alt="Sparkline" />
        </div>
      </div>
    </div>
  );
}
