import React, { useContext } from "react";
import Feedback from "./Feedback";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./Shared/Spinner";

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
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: "all 0.5s" }}
            exit={{ opacity: 0, display: "none" }}
          >
            <Feedback key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
