import React from "react";
import Timer from "./ActivityFormComponents/Timer";

const ActivityForm = () => {
  return (
    <div>
      Activity Input Form
      <div>
        <h2>Start Time:</h2>
        <Timer />
      </div>
      <div>
        <h2>End Time:</h2>
        <button>Done Now</button>
        <Timer />
      </div>
      <div>
        <h2>Amount:</h2>
      </div>
      <div>
        <h2>Memo:</h2>
      </div>
    </div>
  );
};
export default ActivityForm;
