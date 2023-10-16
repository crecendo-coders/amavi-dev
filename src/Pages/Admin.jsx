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

  const handleCheckbox = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
      setShowArchived(true)
    } else {
      console.log('⛔️ Checkbox is NOT checked');
      setShowArchived(false)
    }
    setIsSubscribed(current => !current);
  };


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
    const id = i + 1;
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



  const archiveEvent = (i) => {
    const id = i + 1;
    console.log("archive id", id);
    axios
      .put(`/api/event/archive/${id}`)
      .then((res) => {
        console.log("event archive", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
    setEvents(events.filter((event) => event.eventId != id));
  };
  const deleteEvent = (i) => {
    const id = i + 1;
    console.log("delete id", id);
    axios
      .delete(`/api/event/${id}`)
      .then((res) => {
        console.log("events", res.data);
      })
      .catch((err) => {
        console.error("unable to get events for admin page", err);
      });
    setEvents(events.filter((event) => event.eventId != id));
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
      {events.map((event, i) => (
        <div key={event.eventId} className="bg-white rounded-lg p-4 shadow-md">
          {editMode ? (
            <div>
              <div>event form todo</div>
              <ButtonGroup>
                <Button onClick={() => updateEvent(i, values)}>Save</Button>
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
