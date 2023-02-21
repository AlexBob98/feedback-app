import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext);

  const handleChange = (event) => {
    setSelected(Number(event.currentTarget.value));
    select(Number(event.currentTarget.value));
  };

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  let numRating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className="ratings">
      {numRating.map((item, i) => (
        <li className="num-rating" key={item}>
          <label className="label-rating" htmlFor={`num${item}`}>
            <input
              className="input-rating"
              type="radio"
              id={`num${item}`}
              name="rating"
              value={`${item}`}
              onChange={handleChange}
              checked={selected === item}
            />
            <span>{item}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
