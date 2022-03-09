import {ReactComponent as GitHubIcons} from 'assets/img/github.svg';
import './styles.css';
function Navbar(){
    return(
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/Paulohbarbosa">
            <div className="dsmovie-contact-conteiner">
                <GitHubIcons/>
                <p className="dsmovie-contact-link">
                    /DeveSuperior
                </p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}
export default Navbar;