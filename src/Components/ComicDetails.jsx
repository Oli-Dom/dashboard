import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './details.css';

const ComicDetails = () => {
  const { id } = useParams();
  const [comicTitle, setComicTitle] = useState('');
  const [comicDesc, setComicDesc] = useState('');

  useEffect(() => {
    const fetchComicDetails = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&183&apikey=4f6baae1c78614d1e0dc945c05d0df3c&hash=b8c8b6b0a5d6eef0e336923523ded84d`
        );
        const data = await response.json();

        setComicTitle(data.data.results[0].title);
        setComicDesc(data.data.results[0].description);
      } catch (error) {
        console.error('Error fetching comic details:', error);
      }
    };

    fetchComicDetails();
  }, [id]);

  return (
    <div className="app">
      <div className="navdiv">
        <Navbar />
      </div>
      <div className="comic-details">
        {comicTitle ? (
          <>
            <h2>Title: {comicTitle}</h2>
            <h3>Description: {comicDesc}</h3>
          </>
        ) : (
          <p>Loading comic details...</p>
        )}
      </div>
    </div>
  );
};

export default ComicDetails;
