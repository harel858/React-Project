import { Link } from "react-router-dom";
import classes from "./navBar.module.css";

function MainNavigatonBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Nav-Bar</div>
      <nav>
        <ul>
          <li>
            <Link className={classes.link} to="/">
              All Meet Up
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/favorites">
              Favorites
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/new-meet-ups">
              New Meet Ups
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigatonBar;
