import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "rsuite";
import AddSubscriber from "../Elements/AddSubscriber";
import EditSubscriber from "../Elements/EditSubscriber";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ManageMembers() {
    const [members, setMembers] = useState([]);
    const [editMember, setEditMember] = useState(null);
    const [addMember, setAddMember] = useState(false);
    const [showAll, setShowAll] = useState(0);
    const [route, setRoute] = useState("/api/activeMembers");

    useEffect(() => {
        axios
            .get(route)
            .then((res) => {
                setMember(res.data);
                console.log("members", res.data);
            })
            .catch((err) => {
                console.error("unable to get members for admin page", err);
            });
    }, [editMember, showAll, addMember]);

    const deleteMember = (member) => {
        console.log("delete id", member.memberId);
        axios
            .delete(`/api/member/${member.memberId}`)
            .then((res) => {
                console.log("members", res.data);
            })
            .catch((err) => {
                console.error("unable to get members for admin page", err);
            });
        setMembers(
            members.filter((member1) => member1.memberId != member.memberId)
        );
    };
    return (
        <div>
            <div className="flex justify-center flex-wrap w-full  px-2 py-16 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex w-full space-x-1 rounded-xl bg-blue-900/20 p-1">
                        <Tab
                            onClick={() => setRoute("/api/activeMembers")}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 whitespace-nowrap",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }
                        >
                            Show Active Members
                        </Tab>
                        
                        <Tab
                            onClick={() => setRoute("/api/members")}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 whitespace-nowrap",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }
                        >
                            Show All Members
                        </Tab>
                        <Tab
                            onClick={() => setRoute("/api/everyone")}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 whitespace-nowrap",
                                    selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }
                        >
                            Show Everyone
                        </Tab>
                    </Tab.List>
      

                        {route === "/api/everyone" ? (
                          <Tab
                                onClick={() => setAddMember(true)}
                                className={({ selected }) =>
                                classNames(
                                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                        selected
                                        ? "bg-white shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                        )
                                      }
                            >
                                Add
                            </Tab>
                        ) : (
                            <></>
                            )}
                  

                    <Tab.Panels>
                        <Tab.Panel>Content 1</Tab.Panel>
                        <Tab.Panel>Content 2</Tab.Panel>
                        <Tab.Panel>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            {addMember && <AddSubscriber setAddMember={setAddMember} />}
            {members.map((member) => (
                <div
                    key={member.memberId}
                    className="bg-white rounded-lg p-4 shadow-md"
                >
                    {editMember === member.memberId ? (
                        <div>
                            <EditSubscriber
                                setEditMember={setEditMember}
                                member={member}
                            />
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-lg font-semibold">
                                {member.firstName} {member.lastName}
                            </h3>
                            
                            <p>Email: {member.email}</p>
                            {member.phone && <p>Phone: {member.phone}</p>}
                            
                            <ButtonGroup>
                                <Button onClick={() => deleteMember(member)}>
                                    Delete
                                </Button>
                                {member.subscribed ? (
                                    <Button onClick={() => unsubscribe(member)}>
                                        Unsubscribe
                                    </Button>
                                ) : (
                                    <Button onClick={() => unsubscribe(member)}>
                                        Resubscribe
                                    </Button>
                                )}
                                <Button
                                    onClick={() =>
                                        setEditMember(member.memberId)
                                    }
                                >
                                    Edit
                                </Button>
                            </ButtonGroup>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
