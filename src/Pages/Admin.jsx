import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "rsuite";

export default function Admin() {
  const appearance = "primary";
  const [events, setEvents] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((res) => {
        setEvents(res.data);
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
  }, [editMode]);

  const saveEvent = (i) => {
    const id = i+1
    const event = events[i]
    console.log("save id", id, event);
    axios
      .put(`/api/event/${id}`, event)
      .then((res) => {
        setEvents(res.data);
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
    setEditMode(false);
  };

  const archiveEvent = (i) => {
    const id = i+1
    console.log("archive id", id);
    axios
      .put(`/api/event/archive/${id}`)
      .then((res) => {
        console.log("event archive", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
      console.log("newEvents", events, archived,) ;
      events.splice(i, 1)
      setEvents(newEvents)
  };
  const deleteEvent = (i) => {
    const id = i+1
    console.log("delete id", id);
    axios
      .delete(`/api/event/${id}`)
      .then((res) => {
        
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
      const newEvents = events.slice(i,1)
      console.log("newEvents", newEvents);      
      setEvents(res.data);
  };
  return (
    <div>
      <h1>Events</h1>
      <Button>Add</Button>
      {events.map((event, i) => (
          <div key={event.eventId} className="bg-white rounded-lg p-4 shadow-md">
            {editMode ? (
              <div>
                <div>event form todo</div>
                <ButtonGroup>
                  <Button onClick={() => saveEvent(i, event)}>Save</Button>
                  <Button onClick={() => editMode(false)}>Cancel</Button>
                </ButtonGroup>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold">{event.name}</h3>
                <p>Date: {event.date}</p>
                <p className="mt-2">{event.summary}</p>
                <ButtonGroup>
                  <Button onClick={() => deleteEvent(i)}>Delete</Button>
                  <Button onClick={() => archiveEvent(i)}>Archive</Button>
                  <Button onClick={() => editMode(true)}>Edit</Button>
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
