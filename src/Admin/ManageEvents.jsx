import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "rsuite";
import AddEvent from "../Elements/AddEvent";
import EditEvent from "../Elements/EditEvent";

export default function ManageEvents() {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [addEvent, setAddEvent] = useState(false);
  const [showArchived, setShowArchived] = useState(false);


  useEffect(() => {
    const route = showArchived?"/api/events/all":"/api/events"
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
        setEvents(res.data)
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
      <ButtonGroup>
        <Button onClick={()=> setAddEvent(true)}>Add</Button>
        {showArchived?
        <Button color="green" onClick={()=>setShowArchived(false)}>Hide Archived Events</Button>:
        <Button color="yellow" onClick={()=>setShowArchived(true)}>Show Archived Events</Button>}
      </ButtonGroup>
      {addEvent && <AddEvent setAddEvent={setAddEvent}/>}
      {events.map((event) => (
        <div key={event.eventId} className="bg-white rounded-lg p-4 shadow-md">
          {(editEvent === event.eventId) ? (
            <div>
              <EditEvent setEditEvent={setEditEvent} event={event} />
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <p>Date: {event.date}</p>
              <p className="mt-2">{event.summary}</p>
              <ButtonGroup>
                <Button onClick={() => deleteEvent(event)}>Delete</Button>
                {event.archive
                ?
                <Button onClick={() => archiveEvent(event)}>Restore</Button>
                :
                <Button onClick={() => archiveEvent(event)}>Archive</Button>
                }
                <Button onClick={() => setEditEvent(event.eventId)}>Edit</Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
