import Navbar from "./Navbar";

const HomeView = () => {
  return (
    <div className="character-container">
      <Navbar />
      <div className="container is-fluid">
        <section class="hero is-light is-fullheight">
          <div class="hero-body">
            <div class="">
              <p class="title">Rick and Morty site with React</p>
              <p class="subtitle">
                Powered by{" "}
                <a href="https://rickandmortyapi.com/">Rick and Morty api</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeView;
