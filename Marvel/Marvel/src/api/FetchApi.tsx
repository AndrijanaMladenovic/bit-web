import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import Main from "../components/Main";
type Proptype = {
  id: number;
  img: string;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };

  comics: any;
  items: any;
};

export const FetchApi = () => {
  const [items, setItems] = useState<Array<Proptype>>([]);
  const [url, setUrl] = useState(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2aee39b608788d49a38308a83e0977ae&hash=4c17ecaf4772f15195f75ea0eafabe4a"
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItems(res.data.data.results);
    };
    fetch();
  }, [url]);

  const searchMarvel = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2aee39b608788d49a38308a83e0977ae&hash=4c17ecaf4772f15195f75ea0eafabe4a`
    );
  };

  return (
    <>
      <Navbar />
      <div className=" p-6">
        <input
          type="search"
          placeholder="Search"
          className=" border-x-zinc-900 "
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={searchMarvel}>
          Search
        </button>
      </div>

      <div>{!items ? <p>Not Found</p> : <Main data={items} />}</div>
    </>
  );
};
