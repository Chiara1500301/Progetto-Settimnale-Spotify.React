import './stylesheets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'


  function HomePage () {
      return (
        <div>
            <script src='https://kit.fontawesome.com/1205482781.js'></script>
          <div className="container-fluid">
            <div className="row">
              {/*SIDEBAR VERTICAL*/}
              <div className="col-2">
                <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
                  <div className="nav-container">
                    <a className="navbar-brand" href="index.html">
                      <img src="/logo/Spotify_Logo.png" alt="Spotify_Logo" width={131} height={40} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <ul>
                          <li>
                            <a className="nav-item nav-link" href="index.html"><i className="fas fa-home fa-lg" />&nbsp; Home
                            </a>
                          </li>
                          <li>
                            <a className="nav-item nav-link" href="#"><i className="fas fa-book-open fa-lg" />&nbsp; Your
                              Library</a>
                          </li>
                          <li>
                            <div className="input-group mt-3">
                              <input type="text" className="form-control mb-2" id="searchField" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                              <div className="input-group-append" style={{marginBottom: '4%'}}>
                                <button className="btn btn-outline-secondary btn-sm" type="button" id="button-addon1" onclick="search()">
                                  GO
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="nav-btn">
                    <button className="btn signup-btn" type="button">Sign Up</button>
                    <button className="btn login-btn" type="button">Login</button>
                    <a href="#">Cookie Policy</a> |
                    <a href="#"> Privacy</a>
                  </div>
                </nav>
              </div>
              {/*END SIDEBAR VERTICAL*/}
              {/*MAIN*/}
              <div className="col-12 col-md-9 offset-md-3 mainPage">
                <div className="row">
                  <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="searchResults" style={{display: 'none'}}>
                      <h2>Search Results</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="rock">
                      <h2>Rock Classics</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="pop">
                      <h2>Pop Culture</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div id="hiphop">
                      <h2>#HipHop</h2>
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END MAIN*/}
          {/*NAVBAR FLEX-BOTTOM*/}
          <div className="container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
              <div className="col-lg-10 offset-lg-2">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                    <div className="row">
                      <a href="/playerbuttons/Shuffle.png">
                        <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                      </a>
                      <a href="/playerbuttons/Previous.png">
                        <img src="/playerbuttons/Previous.png" alt="shuffle" />
                      </a>
                      <a href="/playerbuttons/Play.png">
                        <img src="/playerbuttons/Play.png" alt="shuffle" />
                      </a>
                      <a href="/playerbuttons/Next.png">
                        <img src="/playerbuttons/Next.png" alt="shuffle" />
                      </a>
                      <a href="/playerbuttons/Repeat.png">
                        <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center playBar py-3">
                  <div className="col-8 col-md-6">
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END NAVBAR BOTTOM*/}
        </div>
      );
    }
  export default HomePage

