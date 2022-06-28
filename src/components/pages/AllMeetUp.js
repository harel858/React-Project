import MeetUpList from "../meetups/meetUpList";
import { useState, useEffect } from "react";

/* const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
]; */

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://my-react-project-7efb8-default-rtdb.firebaseio.com//meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetUps = [];
        for (const key in data) {
          const newMeetUp = {
            id: key,
            ...data[key],
          };
          console.log(newMeetUp);
          meetUps.push(newMeetUp);
        }
        console.log(meetUps);

        setIsLoading(false);
        setLoadedMeetUps(meetUps);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meet Up Page</h1>
      <MeetUpList meetUps={loadedMeetUps} />
    </section>
  );
}

export default AllMeetUpsPage;
