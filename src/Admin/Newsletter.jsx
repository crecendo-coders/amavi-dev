import axios from "axios";
import { Button, ButtonGroup } from "rsuite";
import { useState } from "react";

export default function Newsletter() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleTabKeyPress = (e, stateUpdater) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const { selectionStart, selectionEnd, value } = e.target;
      const newValue =
        value.substring(0, selectionStart) + "\t" + value.substring(selectionEnd);
      stateUpdater(newValue);
    }
  };

  const handleSendEmail = () => { 
    console.log("subjext:", subject);
    console.log("body:", body);
    axios
    .post(`/api/send/`, {subject, body})
    .then((res) => {
      console.log("Response: ", res.data);
      setData(res.data)
      setConfirm(true);
      })
      .catch((err) => console.log("subscribe error:", err));
   }

  return (
    <div >
      <h1>Email Subscribers</h1>
        <Button onClick={handleSendEmail}>Send</Button>
      <label className="p-5" text="Subject">
        <textarea
          value={subject}
          cols={100}
          rows={1}
          className="text-gray-500 p-5 border-2 border-slate-100 rounded-lg"
          placeholder="Amavi Chorale Newsletter"
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <label className="p-5" text="Email Body">
        <textarea
          value={body}
          rows={10}
          cols={100}
          className="text-black outline-gray focus:outline-blue p-5 border-2 border-slate-100 rounded-lg"
          placeholder="To my minions...(copy/paste allowed)"
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={(e) => handleTabKeyPress(e, setBody)}
        />
      </label>
    </div>
  );
}
