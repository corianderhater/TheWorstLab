import "../index.scss";

function ModelDescription({ modelData }) {
  return (
    <>
      <div className="card-description">
        <div className="card-title"> {modelData.name} </div>
        <div className="card-text"> {modelData.description} </div>
      </div>
    </>
  );
}

export default ModelDescription;
