import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/App.css";

const App = () => {
  const [data, setdata] = useState([]);
  const [time, settime] = useState([]);
  const [Loading, setLoading] = useState(true);
  const Apidata = async () => {
    const res = await fetch(
      "https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1"
    );
    const finalres = await res.json();
    setdata(finalres);
    setLoading(false);
    console.log(finalres);
  };

  const mydate = () => {
    let a = new Date().toLocaleTimeString();
    settime(a);
  };

  useEffect(() => {
    Apidata();
    mydate();
  }, []);

  return (
    <>
      {Loading ? (
        <div className="text-center">
          <InfinitySpin />
        </div>
      ) : (
        data.map((val, index) => {
          return (
            <div key={index} className="card-group">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">
                    {val.firstName} {val.lastName}
                  </h5>
                  <p className="card-text">{val.age}</p>
                  <p className="card-text">{val.contactNumber}</p>
                  <p className="card-text">{val.dob}</p>
                  <p className="card-text">{val.email}</p>
                  <p className="card-text">{val.contactNumber}</p>
                  <p className="card-text">
                    <small className="text-muted">Last updated {time}</small>
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default App;
