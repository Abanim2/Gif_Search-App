// import React, { useState } from 'react';
// import axios from 'axios';
// // import "./GifSearch.css";

// const GifSearch = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [gifList, setGifList] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get(
//         `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65`
//       );
//       setGifList(response.data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search for GIFs"
//           onChange={(event) => setSearchQuery(event.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {gifList.map((gif) => (
//         <img src={gif.images.fixed_height.url} alt={gif.title} key={gif.id} />
//       ))}
//     </div>
//   );
// };

// export default GifSearch;


import './GifSearch.css';
import  MainComponent from './GifSearch/MainComponent';

function GifSearch() {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default GifSearch;