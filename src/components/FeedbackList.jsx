import React, { useContext } from "react";
import Feedback from "./Feedback";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack here</p>;
  }
  return (
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
