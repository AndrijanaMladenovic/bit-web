import { useNavigate } from "react-router-dom";

export default function Main({ data }: any) {
  let navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-3 gap-5 p-6">
        {data
          ? data.map((item: any) => {
              return (
                <div
                  className="card border-2 border-red-500 p-3 rounded"
                  key={item.id}>
                  <h3 className="t-black">{item.name}</h3>
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt=""
                  />
                  <div className=" flex justify-center gap-5 p-3 bg-black ">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => navigate(`/${item.id}`)}>
                      Info
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Add
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
