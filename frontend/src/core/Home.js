import { API } from "../backend";
import Base from "./index";

export default function Home() {
  console.log("API IS", API);

  return (
    <Base
      title="Home Page"
      description="Welcome to the Tshirt Store">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">TEST</button>
        </div>
      </div>
    </Base>
  );
}
