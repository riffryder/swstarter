import React from "react";
import { Link } from "react-router-dom";

const Results = ({selection, results}) => (
    <div>
      <h4>Results</h4>
      {selection === "People" ? (
        <div>
          {results.map((result, resultIndex) => 
            <div>
              <div key={resultIndex}>{result.name}</div>
            <Link to={{
              pathname: `/people/${result.name}`,
              state: { detail: result }
            }}>
              <button>See Details</button>
            </Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          {results.map((result, resultIndex) =>
            <div>
              <div key={resultIndex}>{result.title}</div>
              <Link to={{
                pathname: `/films/${result.title}`,
                state: { detail: result }
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