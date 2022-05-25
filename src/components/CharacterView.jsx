import Navbar from "./Navbar";

const CharacterView = ({ character }) => {
  return (
    <div className="character-container">
      <Navbar />

      <div className="container is-fluid">
        {character.map((person, index) => {
          const list = (
            <div key={index} className="character-card box">
              <>
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-256x256">
                      <img src={person.image} alt={person.name} />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p className="is-size-5">name: {person.name}</p>
                      <p className="is-size-5">species: {person.species}</p>
                      <p className="is-size-5">gender: {person.gender}</p>
                      <p className="is-size-5">
                        location: {person.location.name}
                      </p>
                      <p className="is-size-5">origin: {person.origin.name}</p>
                      <p className="is-size-5">status: {person.status}</p>
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

export default CharacterView;
