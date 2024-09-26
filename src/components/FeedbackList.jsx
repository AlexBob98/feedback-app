import React, { useContext } from "react";
import Feedback from "./Feedback";
import { AnimatePresence } from "framer-motion";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./Shared/Spinner";
import Animate from "./Shared/Animate";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No FeedBack here</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <Animate key={item.id}>
            <Feedback key={item.id} item={item} />
          </Animate>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
