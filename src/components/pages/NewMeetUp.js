import Form from "../layout/form";
import { useNavigate } from "react-router-dom";
function NewMeetUpsPage() {
  const history = useNavigate();
  function onSend(data) {
    fetch(
      "https://my-react-project-7efb8-default-rtdb.firebaseio.com//meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Meet Up</h1>
      <Form onSend={onSend} />
    </section>
  );
}
export default NewMeetUpsPage;
