import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SubscribeModal = ({ setShowModal }) => {
  const Confirm = withReactContent(Swal);
  const [confirm, setConfirm] = useState(false)
  const [data, setData] = useState({})
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log("subscriber data:", data);
    axios
    .post(`/api/subscribe/`, data)
    .then((res) => {
      console.log("Response: ", res.data);
      setData(res.data)
      setConfirm(true);
      })
      .catch((err) => console.log("subscribe error:", err));
  };

  const unsubscribe = (subscriber) => {
    axios
    .put("/api/unsubscribe", subscriber)
      .then((res) => {
        console.log("res", res);
          Confirm.fire({
            icon: "info",
            title: `Goodbye ${subscriber.name}.  ${subscriber.email} has been unsubscribed`,
            timer: 2000
          });
          setShowModal(false);
      });
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-400 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Subscribe to our email list</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 opacity-5 float-right text-3xl leading-none font-semibold outline focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent m-1 h-6 w-6 justify-center items-center text-2xl block outline-none focus:outline-dashed">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            {confirm?(
              <>
                <div className="relative p-6 flex-auto">
                  <p>Congratulations {data.name}!</p>
                  <p>{data.email} has been subscribed to our mailing list</p>
                  <button onClick={()=>unsubscribe(data)}>Unsubscribe</button>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                </div>
              </>
              ):(
                <>
                  <div className="relative p-6 flex-auto">
                    <form className="my-4 text-lg leading-relaxed" onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" placeholder="name" {...register("name", {})} />
                      <input type="text" placeholder="email" {...register("email", {})} />
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button type="submit" > Subscribe </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default SubscribeModal;
