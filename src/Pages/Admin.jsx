import axios from "axios";
import { Button, ButtonGroup } from "rsuite";
import ManageEvents from "../Elements/ManageEvents";
import ManageSubscribers from "../Elements/ManageSubscribers";

export default function Admin() {
  const appearance = "primary";
  
  return (
    <div>
      <h1>Manage Events</h1>
      <ManageEvents/>
      <h1>Affiliates</h1>
      <ButtonGroup>
        <Button appearance={appearance}>Delete</Button>
        <Button appearance={appearance}>Edit</Button>
        <Button appearance={appearance}>Add</Button>
      </ButtonGroup>
      <h1>Subscribers</h1>
      <ManageSubscribers />
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
