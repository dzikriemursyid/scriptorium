const MovieCard = ({ image, title, date }) => {
  return (
    <div className="card-content">
      <style>
        {`
            .card-content {
                width: 160px;
                overflow: hidden;
                margin: 20px;
            }
            .card-img {
                border-radius: 10px;
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
            .card-body {
                text-align: start;
            }
            .card-title {
                margin: 0.4em 0;
                font-size: 1em;
            }
            .card-date {
                margin: 0;
                font-size: 1em;
                color: #777;
            }
            .
            `}
      </style>
      <img className="card-img" src={image} alt="Test" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-date">{date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
