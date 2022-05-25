import Navbar from "./Navbar";

const LocationView = ({ location }) => {
  return (
    <div className="location-container">
      <Navbar />
      <div className="container is-fluid">
        {location.map((place, index) => {
          const list = (
            <div key={index} className="character-card box">
              <>
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-256x256">
                      <img
                        className="location-img"
                        src="https://picsum.photos/640/360"
                        alt={place.name}
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p className="is-size-5">name: {place.name}</p>
                      <p className="is-size-5">dimension: {place.dimension}</p>
                      <p className="is-size-5">type: {place.type}</p>
                    </div>
                  </div>
                </article>
              </>
            </div>
          );

          return list;
        })}
      </div>
    </div>
  );
};

export default LocationView;
