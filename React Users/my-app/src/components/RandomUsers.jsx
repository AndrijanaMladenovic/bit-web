import React, { useState } from "react";
import { useEffect } from "react";
import "./randomUsers.css";

export default function RandomUsers() {
  function getFormattedDate(element) {
    var date = new Date(element);
    return (
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      date.getFullYear()
    );
  }
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.results.slice(0, 10));
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.picture.medium} />
            <div className="info">
              <p>Name: {item.name.first}</p>
              <p>email : {item.email}</p>
              <p>date of birth : {getFormattedDate(item.dob.date)}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
