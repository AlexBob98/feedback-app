import React from "react";
import { motion } from "framer-motion";

function Animate({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: "all 1.2s" }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Animate;
