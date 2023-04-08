import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ItemsType = {
  name: string;
  thumbnail: { path: string; extension: string };
  description: string;
};

export default function Info() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemsType>();
  const [active, setActive] = useState(true);
  let navigate = useNavigate();
  const [comics, setComics] = useState<any[]>([]);
  const [check, setIsChecked] = useState(false);
  const [error, setError] = useState<string>("");
  let className = "";
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        if (active === true) {
          setItem(res.data.data.results[0]);
        } else if (active === false) {
          setComics(res.data.data.results);
        }
      } catch (error: unknown) {
        setError((error as Error).message);
      }
    };
    fetchData();
  }, [url, active]);

  const searchComics = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`
    );
    setActive(false);
    setIsChecked(!check);
  };
  console.log(comics);

  if (item) {
    return (
      <>
        <div className="flex gap-3 p-3 bg-black">
          <Link to={"/"}>
            {" "}
            <img className="w-20" src="/img/logo.png" alt="logo" />
          </Link>
          <h1 className=" text-white">Marvel Heros</h1>
        </div>
        <div className="">
          <div className="flex gap-10  justify-center p-20 align-middle">
            <Zoom>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt=""
                width={300}
              />
            </Zoom>

            <div className="left-box">
              <h1>{item.name}</h1>
              <h4 className="p-8 text-red-500">{item.description}</h4>
            </div>
          </div>
          <div>
            <label className="flex items-center relative w-max cursor-pointer select-none">
              <span className="text-lg font-bold mr-3 p-3">Show Comics</span>
              <input
                onClick={searchComics}
                type="checkbox"
                className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500"
              />
              <span className="absolute font-medium text-xs uppercase right-1 text-white">
                {" "}
                OFF
              </span>
              <span className="absolute font-medium text-xs uppercase right-8 text-white">
                {" "}
                ON{" "}
              </span>
              <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
            </label>
          </div>
          <div
            className={
              check == false
                ? "hidden"
                : "grid grid-cols-7 justify-items-center  comics p-6"
            }>
            {comics.map((item: any) => {
              return (
                <div key={item.id}>
                  <img
                    className=" w-24"
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    onClick={() => navigate(`comics/${item.id}`)}
                    alt={item.title}
                  />
                  <p className=" text-xs w-24">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
