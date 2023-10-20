import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "rsuite";
import AddSubscriber from "../Elements/AddSubscriber";
import EditSubscriber from "../Elements/EditSubscriber";

export default function ManageSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [getSubscribers, setGetSubscribers] = useState(false);
  const [addSubscriber, setAddSubscriber] = useState(false);
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    const route = showAll?"/api/subscribers/all":"/api/subscribers"
    axios
      .get(route)
      .then((res) => {
        setSubscribers(res.data);
        console.log("subscribers", res.data);
      })
      .catch((err) => {
        console.error("unable to get subscribers for admin page", err);
      });
  }, [getSubscribers, showAll, addSubscriber]);


  const unsubscribe = (subscriber) => {
    console.log("subscriber id", subscriber.subscriberId);
    axios
      .put(`/api/unsubscribe`, subscriber)
      .then(() => {
        setGetSubscribers((getSubscribers)=>!getSubscribers)
      })
      .catch((err) => {
        console.error("unable to unsubscribe member", err);
      });
    
  };
  const subscribe = (subscriber) => {
    console.log("subscriber id", subscriber.subscriberId);
    axios
      .post(`/api/subscribe`, subscriber)
      .then(() => {
        setGetSubscribers((getSubscribers)=>!getSubscribers)
      })
      .catch((err) => {
        console.error("unable to subscribe member", err);
      });
    
  };
  const deleteSubscriber = (subscriber) => {
    console.log("delete id", subscriber.subscriberId);
    axios
      .delete(`/api/subscriber/${subscriber.subscriberId}`)
      .then(() => {
        setGetSubscribers((getSubscribers)=>!getSubscribers)
      })
      .catch((err) => {
        console.error("unable to delete member", err);
      });
  };
  return (
    <div>
      <h1>Subscribers</h1>
      <ButtonGroup>
        <Button onClick={()=> setAddSubscriber(true)}>Add</Button>
        {showAll?
        <Button  onClick={()=>setShowAll(false)}>Show Current Subscribers</Button>:
        <Button  onClick={()=>setShowAll(true)}>Show All Subscribers</Button>}
      </ButtonGroup>
      {addSubscriber && <AddSubscriber setAddSubscriber={setAddSubscriber}/>}
      {subscribers.map((subscriber) => (
        <div key={subscriber.subscriberId} className="bg-white rounded-lg p-4 shadow-md">
          {(getSubscribers === subscriber.subscriberId) ? (
            <div>
              <EditSubscriber setGetSubscribers={setGetSubscribers} subscriber={subscriber} />
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold">{subscriber.name} {subscriber.lastName}</h3>
              <h3 className="text-lg font-semibold">{subscriber.companyName}</h3>
              <p>Email: {subscriber.email}</p>
              {subscriber.phone&&<p>Phone: {subscriber.phone}</p>}
              <p>Current Subscriber: {subscriber.subscribed?"True":"False"}</p>
              <ButtonGroup>
                <Button onClick={() => deleteSubscriber(subscriber)}>Delete</Button>
                {subscriber.subscribed
                ?
                <Button onClick={() => unsubscribe(subscriber)}>Unsubscribe</Button>
                :
                <Button onClick={() => subscribe(subscriber)}>Resubscribe</Button>
                }
                <Button onClick={() => setGetSubscribers(subscriber)}>Edit</Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
