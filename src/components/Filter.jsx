import React from "react";
import { useSelector } from "react-redux";

function Filter({filter,setFilter}) {
  const data = useSelector((state) => state.movies);
  if (!data.data) return;
  const allGenre = data.data.reduce(
    (acc, item) => [...acc, ...item.genre.split(",")],
    [],
  );
  const genre = [...new Set(allGenre.map((ele) => ele.trim()))];
  return (
    <form className="filter-bar" onSubmit={(e) => {
      e.preventDefault();
      setFilter({ title: e.target.title.value, genre: e.target.genre.value });
    }}>
      <div className="filter-search">
        <span className="filter-icon">🔍</span>
        <input
          className="filter-input"
          type="text"
          name="title"
          placeholder="Search movies..."
          defaultValue={filter.title}
        />
      </div>
      <select className="filter-select" name="genre" defaultValue={filter.genre}>
        <option value="all">All Genres</option>
        {genre.map((gen) => (
          <option key={gen} value={gen}>{gen}</option>
        ))}
      </select>
      <button className="filter-btn" type="submit">Search</button>
    </form>
  );
}

export default Filter;
