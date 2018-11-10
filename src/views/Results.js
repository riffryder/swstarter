import React from "react";

const Results = ({selection, results}) => (
    <div>
      <h4>Results</h4>
      {selection === "People" ? (
        <div>
          {results.map((result, resultIndex) => 
            <div>
              <div key={resultIndex}>{result.name}</div>
              <button>See Details</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          {results.map((result, resultIndex) =>
            <div>
              <div key={resultIndex}>{result.title}</div>
              <button>See Details</button>
            </div>
          )}
        </div>
      )}
    </div>
);

export default Results;