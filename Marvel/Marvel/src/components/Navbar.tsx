import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" bg-black flex  h-14 p-2  justify-center">
      <Link to={"/"}>
        <img className=" w-24" src="/img/logo.png" alt="logo" />
      </Link>
    </div>
  );
}
