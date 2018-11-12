import React from "react";
import { Link } from "react-router-dom";

import "./Results.css"

const Results = ({ selection, results }) => (
  <div className="ResultsContainer">
    <div className="ResultsTitle">Results</div>
    {selection === "People" ? (
      <div>
        {results.map((result, resultIndex) =>
          <div className="ResultDiv">
            <div className="Result" key={resultIndex}>{result.name}</div>
            <Link to={{
              pathname: `/people/${result.name}`,
              state: { detail: result, type: selection }
            }}>
              <button>See Details</button>
            </Link>
          </div>
        )}
      </div>
    ) : (
        <div>
          {results.map((result, resultIndex) =>
            <div className="ResultDiv">
              <div className="Result" key={resultIndex}>{result.title}</div>
              <Link to={{
                pathname: `/films/${result.title}`,
                state: { detail: result, type: selection }
              }}>
                <button>See Details</button>
              </Link>
            </div>
          )}
        </div>
      )}
  </div>
);

export default Results;