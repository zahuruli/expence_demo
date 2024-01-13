import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          >
            {" "}
          </span>
          Loading...
        </button>
      </div>
    </>
  );
};

export default Spinner;
