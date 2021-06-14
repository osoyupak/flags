import React from "react";

export default function Countries(props) {
  return (
    <div>
      {props.countries
        .filter((country) => country.name.toLowerCase().includes(props.search.toLowerCase()))

        .map((country, index) => {
          return (
            <div className="row" key={index}>
              <div className="card mb-3 gx-0">
                <div className="row g-0 gx-0">
                  <div className="col-md-6 ">
                    <img
                      src={country.flag}
                      className="img-fluid"
                      alt="..."
                      style={{ width: "18rem" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{country.name}</h5>
                      <p className="card-text">{country.capital}</p>
                      <p className="card-text">
                        <small className="text-muted">{country.region}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
