import { useState } from "react";
import "./App.css";

import Card from "./components/Card";
import { encrypt } from "./utility";
import AlertDialog from "./components/AlertDialog";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [textData, setTextData] = useState("");
  const [edit, setEdit] = useState({ isEdit: false, idx: 0 });

  const [openDialogue, setOpenDialog] = useState(false);

  const Buttons = () => (
    <div>
      {!edit.isEdit ? (
        <button className="button" onClick={handleSubmit}>
          Save
        </button>
      ) : (
        <div className="buttonContainer">
          <button className="button" onClick={handleClickOpen}>
            Update
          </button>
          <button
            className="button"
            onClick={() => {
              setEdit({ isEdit: false, idx: 0 });
              setTextData("");
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleUpdate = () => {
    if (textData === cardsData[edit.idx].data) {
      setEdit({ isEdit: false, idx: 0 });
      setTextData("");
    }
    if (textData !== "") {
      let data = cardsData;
      data[edit.idx].data = encrypt(textData);
      setCardsData(data);
      setEdit({ isEdit: false, idx: 0 });
      setTextData("");
    }
    handleClose();
  };

  const handleSubmit = () => {
    if (textData !== "") {
      let data = cardsData;
      data.push({
        data: encrypt(textData),
        timeStamp: new Date().toLocaleString(),
      });
      setCardsData(data);
      setTextData("");
    }
  };

  return (
    <div className="mainContainer">
      <div className="boxContainer">
        <div className="textAreaContainer">
          <textarea
            className="textArea"
            cols="70"
            rows="25"
            value={textData}
            onChange={(e) => {
              setTextData(e.target.value);
            }}
          />
          <Buttons />
        </div>
        <div className="cardContainer">
          {cardsData.map((val, idx) => (
            <Card
              {...val}
              setTextData={setTextData}
              setEdit={setEdit}
              idx={idx}
            />
          ))}
        </div>
      </div>
      <AlertDialog
        open={openDialogue}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
