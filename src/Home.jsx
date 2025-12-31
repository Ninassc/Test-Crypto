import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";

export default function Home() {
  const [cryptoList, setCrptoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (loading) {
        const url = "https://api.coingecko.com/api/v3/search/trending";

        const response = await fetch(url);

        if (response) {
          const res = await response.json();
          setCrptoList(res.coins);
        }
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
      console.log(cryptoList);
    }
  };

  useEffect(() => fetchData, []);

  return (
    <>
      <header>
        <h1>Crypto Info</h1>
      </header>

      <div className="cards">
        {cryptoList.map((crypto, cryptoIndex) => (
          <CryptoCard key={cryptoIndex} crypto={crypto} />
        ))}
      </div>
    </>
  );
}
