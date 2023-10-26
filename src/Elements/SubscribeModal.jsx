import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SubscribeModal = ({ setShowModal }) => {
  const Confirm = withReactContent(Swal);
  const [confirm, setConfirm] = useState(false);
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("subscriber data:", data);
    axios
      .post(`/api/subscribe/`, data)
      .then((res) => {
        console.log("Response: ", res.data);
        setData(res.data);
        setConfirm(true);
      })
      .catch((err) => console.log("subscribe error:", err));
  };

  const unsubscribe = (subscriber) => {
    axios.put("/api/unsubscribe", subscriber).then((res) => {
      console.log("res", res);
      Confirm.fire({
        icon: "info",
        title: `Goodbye ${subscriber.name}.  ${subscriber.email} has been unsubscribed`,
        timer: 2000,
      });
      setShowModal(false);
    });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-400 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Subscribe to our email list
              </h3>
              <button
                type="button"
                class="bg-white ml-4 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setShowModal(false)}
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/*body*/}
            {confirm ? (
              <>
                <div className="relative p-6 flex-auto">
                  <p>Congratulations {data.name}!</p>
                  <p>{data.email} has been subscribed to our mailing list</p>
                  <button
                    className="text-red-500"
                    onClick={() => unsubscribe(data)}
                  >
                    Unsubscribe
                  </button>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-lg"
                    onClick={() => setShowModal(false)}
                  >
                    {" "}
                    Close{" "}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="pr-6">
                  <form
                    className=" text-lg text-blue-500"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      className="m-3"
                      type="text"
                      placeholder="name"
                      {...register("name", {})}
                    />
                    <input
                      className="m-3"
                      type="text"
                      placeholder="email"
                      {...register("email", {})}
                    />
                    <input className="m-3" type="submit" name="Subscribe" />
                    <div
                      class="g-recaptcha"
                      data-sitekey={import.meta.env.VITE_PUBLIC_CAPTCHA}
                    ></div>
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
