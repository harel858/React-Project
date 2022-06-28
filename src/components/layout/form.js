import Card from "../ui/card";
import classes from "../layout/form.module.css";
import { useRef } from "react";

function Form(props) {
  const titleInpute = useRef();
  const imgInpute = useRef();
  const addressInpute = useRef();
  const descriptionInpute = useRef();
  function sentData(event) {
    event.preventDefault();
    const enteredTitleInpute = titleInpute.current.value;
    const enteredImgInpute = imgInpute.current.value;
    const enteredAddressInpute = addressInpute.current.value;
    const enteredDescriptionInpute = descriptionInpute.current.value;
    const data = {
      title: enteredTitleInpute,
      image: enteredImgInpute,
      address: enteredAddressInpute,
      description: enteredDescriptionInpute,
    };
    props.onSend(data);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={sentData}>
        <div className={classes.control}>
          <label htmlFor="title">Meet Up Title</label>
          <input type="text" required id="title" ref={titleInpute} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meet Up image</label>
          <input type="url" required id="image" ref={imgInpute} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meet Up address</label>
          <input type="text" required id="address" ref={addressInpute} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meet Up description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInpute}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button> Add New Image </button>
        </div>
      </form>
    </Card>
  );
}
export default Form;
