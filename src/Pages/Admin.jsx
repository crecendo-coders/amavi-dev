import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Checkbox } from "rsuite";
import AddEvent from "../Elements/AddEvent";
import EditEvent from "../Elements/EditEvent";
import ManageEvents from "../Elements/ManageEvents";

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
