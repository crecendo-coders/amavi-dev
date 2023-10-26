import axios from "axios";
import { Button, ButtonGroup } from "rsuite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newsletter() {
  const [subject, setSubject] = useState("Amavi Chorale Newsletter");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleTabKeyPress = (e, stateUpdater) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const { selectionStart, selectionEnd, value } = e.target;
      const newValue =
        value.substring(0, selectionStart) +
        "\t" +
        value.substring(selectionEnd);
      stateUpdater(newValue);
    }
  };

  const handleSendEmail = () => {
    console.log("subjext:", subject);
    console.log("body:", body);
    axios
      .post(`/api/send/`, { subject, body })
      .then((res) => {
        console.log("Response: ", res.data);
        
      })
      .catch((err) => console.log("subscribe error:", err));
      navigate("/");
  };

  return (
    <div className="flex justify-center flex-col ">
      <h1>Email Subscribers</h1>
      <div className="p-4 w-full border border-gray-500 bg-gray-200  rounded-lg shadow-lg">
        <label className="p-1 m-1 text-black font-bold">Subject</label>
        <textarea
          value={subject}
            rows={1}
            aria-label="Email Subject"
          className="p-2 border-2 w-[90%] border-slate-100 rounded-lg"
          onChange={(e) => setSubject(e.target.value)}
        />
        <label className="p-1 m-1 text-black font-bold">Email Body</label>
        <textarea
          value={body}
          rows={10}
          aria-label="Email Body"
          className="p-2 border-2 w-[90%] border-slate-100 rounded-lg"
          placeholder="Type the body of the text here.  Tab spacing allowed."
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={(e) => handleTabKeyPress(e, setBody)}
        />
        <Button
          className="h-12 justify-center font-bold tracking-widest w-80 m-1 p-1 bg-blue-500 text-gray-200 hover:bg-blue-700 hover:text-white"
          onClick={handleSendEmail}
          textValue="Send Email"
        >
          Send
        </Button>
      </div>
    </div>
  );
}
