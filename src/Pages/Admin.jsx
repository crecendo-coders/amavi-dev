import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Checkbox } from "rsuite";
import AddEvent from "../Elements/AddEvent";

export default function Admin() {
  const appearance = "primary";
  const [events, setEvents] = useState([]);
  const [editMode, setEditMode] = useState(false);
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
  }, [editMode, showArchived]);

  const updateEvent = (i, values) => {
    console.log("save id", id, values);
    axios
      .put(`/api/event/${id}`, values)
      .then((res) => {
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
    setEditMode(false);
    const newEvents = [...events]
    newEvents[i] = values
    setEvents(newEvents);
  };
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
      <h1>Events</h1>
      <ButtonGroup>
        <Button onClick={()=> setAddEvent(true)}>Add</Button>
        {showArchived?
        <Button color="green" onClick={()=>setShowArchived(false)}>Hide Archived Events</Button>:
        <Button color="yellow" onClick={()=>setShowArchived(true)}>Show Archived Events</Button>}
      </ButtonGroup>
      {addEvent && <AddEvent setAddEvent={setAddEvent}/>}
      {events.map((event) => (
        <div key={event.eventId} className="bg-white rounded-lg p-4 shadow-md">
          {(editMode) ? (
            <div>
              <div>event form todo</div>
              <ButtonGroup>
                <Button onClick={() => updateEvent(event.eventId, values)}>Save</Button>
                <Button onClick={() => setEditMode(false)}>Cancel</Button>
              </ButtonGroup>
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
                <Button onClick={() => setEditMode(true)}>Edit</Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      ))}
      <h1>Mailing List</h1>
      <ButtonGroup>
        <Button appearance={appearance}>Delete</Button>
        <Button appearance={appearance}>Edit</Button>
        <Button appearance={appearance}>Add</Button>
      </ButtonGroup>
      <h1>Members</h1>
      <ButtonGroup>
        <Button appearance={appearance}>Delete</Button>
        <Button appearance={appearance}>Edit</Button>
        <Button appearance={appearance}>Add</Button>
      </ButtonGroup>
      <h1>Media?</h1>
    </div>
  );
}
