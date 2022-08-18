export const MainPage = () => {
  return (
    <div className="MainPage-Wrapper">
      <nav className="Nav-Wrapper">
        <div className="Nav-logo-title"></div>
        <div className="Nav-links-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </div>
      </nav>
      <section className="hero-wrapper">
        <div className="hero-content-wrapper">
          <div className="hero-content-img"></div>
          <div className="hero-content-text"></div>
        </div>
        <h1 className="hero-title"></h1>
      </section>
    </div>
  );
};