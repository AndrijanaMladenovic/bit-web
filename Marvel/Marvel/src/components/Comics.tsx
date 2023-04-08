import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment";
import Navbar from "./Navbar";
import { Character, Thumbnail, Date, ComicData, Price } from "../comicTypes";

export default function Comics() {
  let navigate = useNavigate();
  const { idComic } = useParams();
  const [item, setItem] = useState<ComicData>();
  const url = `https://gateway.marvel.com:443/v1/public/comics/${idComic}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`;
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ComicData>(url);
        setItem(res.data);
      } catch (error: unknown) {
        setError((error as Error).message);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <Navbar />
      {error && <p>{error}</p>}
      {item ? (
        <div className="container flex gap-9 p-6">
          <div>
            {/* <p className=" bg-red-500 text-red-50 text-center">Title</p> */}
            <h1 className=" text-lg font-bold  py-6">
              {item.data.results[0].title}
            </h1>
            <img
              src={`${item.data.results[0].thumbnail.path}.${item.data.results[0].thumbnail.extension}`}
              alt={item.data.results[0].title}
            />
          </div>
          <div>
            <p className=" bg-red-500 text-red-50 text-center my-4">
              Description
            </p>
            <p className=" text-red-500">{item.data.results[0].description}</p>
            <ul>
              <p className=" bg-red-500 text-red-50 text-center my-4">
                Characters
              </p>
              {item.data.results[0].characters.items.map((character) => (
                <li key={character.name}>{character.name}</li>
              ))}
            </ul>
            <div className="flex flex-col">
              <p className=" bg-red-500 text-red-50 text-center my-4">Date</p>
              {item.data.results[0].dates.map((element, index) => {
                return (
                  <>
                    <p
                      key={index}
                      className=" bg-red-500 text-red-50 inline-block">
                      {element.type}
                    </p>
                    <span>{moment(element.date).format("DD.MM.YYYY")}</span>
                  </>
                );
              })}
              <div className=" flex gap-4 justify-center">
                {item.data.results[0].prices.map((price, index) => {
                  console.log(price);
                  return (
                    <>
                      <div>
                        {price.type === "printPrice" ? (
                          <button className=" bg-red-500 text-red-50 inline-block my-2 p-3 rounded-lg">
                            Buy Print Price {price.price}$
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {price.type === "digitalPurchasePrice" ? (
                          <button className=" bg-red-500 text-red-50 inline-block my-2 p-3 rounded-lg">
                            Buy Digital Price {price.price}$
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
