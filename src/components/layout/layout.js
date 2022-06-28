import classes from "./layout.module.css";
import MainNavigatonBar from "./navigationBar";

function Layout(props) {
  return (
    <div>
      <MainNavigatonBar />
      <main className={classes.main}>{props.children}</main>;
    </div>
  );
}
export default Layout;
