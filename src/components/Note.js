import { MdDeleteForever } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Note = ({ id, text, date, handleDeleteNode }) => {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const handleChange = (event) => {
    setIsAcknowledged(event.target.checked);
  };

  const handleClick = () => {
    if (isAcknowledged === true) {
      handleDeleteNode(id);
    }
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div className="note-controls">
          <Checkbox
            color="default"
            sx={{ height: 10 }}
            value={isAcknowledged}
            onChange={handleChange}
          />
          <MdDeleteForever
            className="delete-icon"
            size="1.3em"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
