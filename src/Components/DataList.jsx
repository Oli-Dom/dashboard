import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DataList = () => {
  let query =
    'https://gateway.marvel.com:443/v1/public/comics?ts=1&noVariants=true&limit=10&apikey=4f6baae1c78614d1e0dc945c05d0df3c&hash=b8c8b6b0a5d6eef0e336923523ded84d';

  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(query);

        const data = await response.json();
        const filteredComics = data.data.results.filter(
          (data) => data.title !== 'Marvel Previews (2017)'
        );
        setComics(filteredComics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const searcCharacter = (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('input[character="character"]');
    const nameValue = nameInput.value;
    let query = `https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&characters=${nameValue}&apikey=4f6baae1c78614d1e0dc945c05d0df3c&hash=b8c8b6b0a5d6eef0e336923523ded84d`;

    const fetchData = async () => {
      try {
        const response = await fetch(query);

        const data = await response.json();

        setComics(data.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  };

  return (
    <div className="content">
      <form onSubmit={searcCharacter}>
        <label>
          Character:
          <input type="text" character="character" />
        </label>
        <button type="submit">Search</button>
      </form>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Format</th>
            <th>Cover Image</th>
          </tr>
        </thead>
        <tbody>
          {comics.map((comic) => (
            <tr key={comic.id}>
              <td
                style={{
                  width: '40%',
                  padding: '8px',
                  textAlign: 'left',
                  borderTop: 'solid 3px black',
                }}
              >
                <Link to={`/comics/${comic.id}`}>{comic.title}</Link>
              </td>
              <td
                style={{
                  width: '30%',
                  padding: '8px',
                  textAlign: 'center',
                  borderTop: 'solid 3px black',
                }}
              >
                {comic.format}
              </td>
              <td style={{ width: '30%', padding: '8px', textAlign: 'center' }}>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={`Cover Image for ${comic.title}`}
                  style={{ width: '100px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
