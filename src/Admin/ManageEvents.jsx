import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "rsuite";
import AddEvent from "../Elements/AddEvent";
import EditEvent from "../Elements/EditEvent";
import EventComponent from "../Pages/Events";
import Event from "../Elements/Event";

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [addEvent, setAddEvent] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    const route = showArchived ? "/api/events/all" : "/api/events";
    axios
      .get(route)
      .then((res) => {
        setEvents(res.data);
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
  }, [editEvent, showArchived]);

  const archiveEvent = (event) => {
    console.log("archive id", event.eventId);
    axios
      .put(`/api/event/archive/${event.eventId}`, event)
      .then((res) => {
        console.log("res.data", res.data);
        setEvents(res.data);
        console.log("event archive", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
  };
  const deleteEvent = (event) => {
    console.log("delete id", event.eventId);
    axios
      .delete(`/api/event/${event.eventId}`)
      .then((res) => {
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
    setEvents(events.filter((event1) => event1.eventId != event.eventId));
  };
  return (
    <div>
      <h1>Manage Events</h1>

      <ButtonGroup className="flex flex-row justify-center">
        <Button
          className="bg-yellow-200 text-black w-40 font-bold"
          onClick={() => setAddEvent(true)}
        >
          Add Event
        </Button>
        {showArchived ? (
          <Button
            className="bg-yellow-200 w-40 text-black font-bold"
            onClick={() => setShowArchived(false)}
          >
            Hide Archived Events
          </Button>
        ) : (
          <Button
            className="bg-green-500 w-40 text-black font-bold"
            onClick={() => setShowArchived(true)}
          >
            Show Archived Events
          </Button>
        )}
      </ButtonGroup>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {addEvent && (
          <div className="flex flex-col m-4 justify-center">
            <AddEvent setAddEvent={setAddEvent} />
          </div>
        )}
        {events.map((event) => (
          <div
            key={event.eventId}
            className="flex flex-col justify-center md:flex-row "
          >
            {editEvent == event.eventId ? (
              <div className="flex flex-col justify-center">
                <EditEvent setEditEvent={setEditEvent} event={event} />
              </div>
            ) : (
              <div className="flex flex-col gap-3 justify-center">
                <Event event={event} />
                <ButtonGroup className="flex flex-row justify-center">
                  <Button
                    className="bg-red-500 text-white font-bold"
                    onClick={() => deleteEvent(event)}
                  >
                    Delete
                  </Button>
                  {event.archive ? (
                    <Button
                      className="bg-yellow-200  text-black font-bold"
                      onClick={() => archiveEvent(event)}
                    >
                      Restore
                    </Button>
                  ) : (
                    <Button
                      className="bg-green-500  text-black font-bold"
                      onClick={() => archiveEvent(event)}
                    >
                      Archive
                    </Button>
                  )}
                  <Button
                    className="bg-blue-500 text-white font-bold"
                    onClick={() => setEditEvent(event.eventId)}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
