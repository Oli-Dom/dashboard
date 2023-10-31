import React, { useEffect, useState } from 'react';
import Card from './Card';
import DataList from './DataList';
import Graph from './Graph';
import Navbar from './Navbar';
const Home = () => {
  const [tony, setTony] = useState(0);

  let tonyQuery =
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&name=Tony%20Stark&apikey=4f6baae1c78614d1e0dc945c05d0df3c&hash=b8c8b6b0a5d6eef0e336923523ded84d';
  useEffect(() => {
    const getTony = async () => {
      try {
        const response = await fetch(tonyQuery);
        const data = await response.json();
        const comics = data.data.results[0].comics.available;
        setTony(comics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getTony();
  }, []);

  const [total, setTotal] = useState(0);

  let totalQuery =
    'https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&apikey=4f6baae1c78614d1e0dc945c05d0df3c&hash=b8c8b6b0a5d6eef0e336923523ded84d';
  useEffect(() => {
    const getTotal = async () => {
      try {
        const response = await fetch(totalQuery);
        const data = await response.json();
        const totalComics = data.data.total;
        setTotal(totalComics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getTotal();
  }, []);

  const [bruce, setBruce] = useState(0);

  let bruceQuery =
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&name=Bruce%20Banner&apikey=4f6baae1c78614d1e0dc945c05d0df3c&hash=b8c8b6b0a5d6eef0e336923523ded84d';
  useEffect(() => {
    const getBruce = async () => {
      try {
        const response = await fetch(bruceQuery);
        const data = await response.json();
        const comics = data.data.results[0].comics.available;
        setBruce(comics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getBruce();
  }, []);
  return (
    <div className="app">
      <div className="navdiv">
        <Navbar />
      </div>
      <div className="content-container">
        <div className="carddiv">
          <Card
            message={'Number of comics that include Tony Stark:'}
            number={tony}
          />
          <Card message={'Total Marvel Comics:'} number={total} />
          <Card
            message={'Number of comics that include Bruce Banner:'}
            number={bruce}
          />

          <Graph />
        </div>
        <div className="listdiv">
          <DataList />
        </div>
      </div>
    </div>
  );
};

export default Home;
