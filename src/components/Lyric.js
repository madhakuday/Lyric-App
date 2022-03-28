import React, { useEffect, useState } from 'react';
import '../stylesheet/Lyrics.css';

// let api = 'https://api.lyrics.ovh/v1/artist/title';

function Lyric() {
  const [lyrics, setlyrics] = useState([]);
  const [input1, setinput] = useState('');

  let apiURL = 'https://api.lyrics.ovh';
  // let apiURL = `https://api.lyrics.ovh/v1/`;

  const hendlonclick = async () => {
    const res = await fetch(`${apiURL}/suggest/${input1}`);
    const result = await res.json();
    setlyrics(result.data);
  };

  return (
    <>
      <div className="container ">
        <div div className="form_div">
          <input
            type="text"
            class="form-control w-75 m-auto"
            placeholder="Enter song "
            onChange={(e) => {
              setinput(e.target.value);
            }}
          ></input>

          <button
            onClick={hendlonclick}
            className="btn   btn-outline-info text-white w-50 m-auto mt-3"
          >
            Search
          </button>
        </div>
        <div className="d-flex  justify-content-center flex-column mt-3 mb-3 ">
          {lyrics.map((s, ind) => {
            return (
              <>
                <div className="card rounded-2 p-2  mb-4 mt-4 mx-5" key={ind}>
                  <img
                    className=" card-img img-thumbnail"
                    src={s.album.cover_medium}
                    alt=""
                  />
                  <p className="card-tital text-gray-900 fw-bolder">
                    Titel : {s.album.title}{' '}
                  </p>
                  <p className=" text-gray-900 card-subtitle fw-bolder">
                    artist : {s.artist.name}
                  </p>
                  <audio className="mb-3" src={s.preview} controls></audio>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Lyric;
