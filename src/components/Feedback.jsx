import Card from "./Shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import React, { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function Feedback({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="btns-block">
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit />
        </button>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes />
        </button>
      </div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feedback;
