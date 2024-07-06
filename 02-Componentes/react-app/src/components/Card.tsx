function Card(): JSX.Element {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            card subtitle
          </h6>
          <p className="card-text">
            some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
