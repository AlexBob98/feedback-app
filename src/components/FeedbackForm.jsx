import React from "react";
import Card from "./Shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";
import Animate from "./Shared/Animate";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setName(feedbackEdit.item.name);
    }
  }, [feedbackEdit]);

  const handleTextChange = (event) => {
    const currentText = event.target.value;
    if (currentText.length <= 10 && currentText.length > 0) {
      setMessage(`Text must be at least 10 characters`);
      setBtnDisabled(true);
    } else {
      setMessage();
      setBtnDisabled(false);
    }
    setText(currentText);
  };

  const handleNameChange = (event) => {
    const currentName = event.target.value;
    if (currentName.length < 3 && currentName.length > 0) {
      setMessage("Your name must be at least 3 characters");
    } else {
      setMessage();
    }

    setName(currentName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 3) {
      setMessage("Your name must be at least 3 characters");
    }
    if (text.trim().length > 10 && name.length > 3) {
      const newFeedback = {
        name,
        text,
        rating,
      };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
        setText("");
        setName("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group name-input">
          <input
            onChange={handleNameChange}
            type="text"
            placeholder="Your name"
            autoComplete="off"
            value={name}
          ></input>
        </div>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            autoComplete="off"
            value={text}
          ></input>
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && (
          <Animate>
            <div className="message">{message}</div>
          </Animate>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
