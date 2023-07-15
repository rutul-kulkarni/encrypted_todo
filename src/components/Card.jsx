import { decrypt } from "../utility";

const Card = ({ data, timeStamp, setTextData, setEdit, idx }) => {
  const handleCardClick = (data) => {
    setTextData(decrypt(data));
  };

  return (
    <div
      className="card"
      onClick={() => {
        handleCardClick(data);
        setEdit({ isEdit: true, idx });
      }}
    >
      <div>{data}</div>
      <div>{timeStamp}</div>
    </div>
  );
};

export default Card;
