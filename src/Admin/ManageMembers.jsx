import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "rsuite";
import AddSubscriber from "../Elements/AddSubscriber";
import EditMember from "../Elements/EditMember";
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
                setMembers(res.data);
                console.log("members", res.data);
            })
            .catch((err) => {
                console.error("unable to get members for admin page", err);
            });
    }, [editMember, showAll, addMember, route]);

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
                <Tab.Group
                    onChange={(index) => {
                        if (index === 0) {
                            setRoute("/api/activeMembers");
                        }
                        if (index === 1) {
                            setRoute("/api/members");
                        }
                        if (index === 2) {
                            setRoute("/api/auditions");
                        }
                        if (index === 3) {
                            setRoute("/api/everyone");
                        }
                        console.log("Changed selected tab to:", index);
                        console.log(route);
                    }}
                >
                    <Tab.List className="flex w-full space-x-1 rounded-xl bg-blue-900/20 p-1">
                        <Tab
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
                            Pending Auditions
                        </Tab>
                        <Tab
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
                        <Tab.Panel className={'w-[50vw]'}>
                            <h1 className="flex justify-center">Choir Members:</h1>
                            {members.map((member) => (
                                <div
                                    key={member.memberId}
                                    className="bg-white border-black border-[1px] rounded-lg p-4 shadow-md"
                                >
                                    <h4 className="text-lg font-semibold">
                                        {member.name}
                                    </h4>

                                    <p>Email: {member.email}</p>
                                    <p>Phone: {member.phone}</p>
                                    <p>
                                        Auditioned:{' '}{member.hasAuditioned.toString()}
                                    </p>
                                    <p>Vocal Range: {member.voicing.type}</p>
                                </div>
                            ))}
                        </Tab.Panel>
                        <Tab.Panel className={'w-[50vw]'}>
                          <h1 className="flex justify-center">Present and Past Members:</h1>
                            {members.map((member) => (
                                <div
                                    key={member.memberId}
                                    className="bg-white rounded-lg border-black border-[1px] p-4 shadow-md"
                                >
                                    <h4 className="text-lg font-semibold">
                                        {member.name}
                                    </h4>
                                    <p>
                                        Choir Status:{" "}
                                        {member.status.type === "Active" ? (
                                            <span className="text-green-500">
                                                {member.status.type}
                                            </span>
                                        ) : (
                                            <span className="text-red-500">
                                                {member.status.type}
                                            </span>
                                        )}
                                    </p>
                                    <p>Email: {member.email}</p>
                                    <p>Phone: {member.phone}</p>
                                    <p>Vocal Range: {member.voicing.type}</p>
                                </div>
                            ))}
                        </Tab.Panel>
                        <Tab.Panel className={'w-[50vw]'}>
                            <h1 className="flex justify-center">Manage Pending Auditions:</h1>
                            {members.map((member) => (
                                <div
                                    key={member.memberId}
                                    className="bg-white rounded-lg border-black border-[1px] p-4 shadow-md"
                                >
                                    {editMember === member.memberId ? (
                                        <div>
                                            <EditMember
                                                setEditMember={setEditMember}
                                                member={member}
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                {member.name}
                                            </h4>
                                            <p>
                                                Choir Status:{" "}
                                                {member.status.type ===
                                                "Active" ? (
                                                    <span className="text-green-500">
                                                        {member.status.type}
                                                    </span>
                                                ) : (
                                                    <span className="text-red-500">
                                                        {member.status.type}
                                                    </span>
                                                )}
                                            </p>
                                            <p>Email: {member.email}</p>
                                            <p>Phone: {member.phone}</p>
                                            <p>
                                                Auditioned:{" "}
                                                {member.hasAuditioned ? (
                                                    <span className="text-green-500">
                                                        {member.hasAuditioned.toString()}
                                                    </span>
                                                ) : (
                                                    <span className="text-red-500">
                                                        {member.hasAuditioned.toString()}
                                                    </span>
                                                )}
                                                
                                            </p>
                                            <p>
                                                Vocal Range:{" "}
                                                {member.voicing.type}
                                            </p>
                                            <p>{member.expDetail}</p>
                                            <p>{member.connection}</p>
                                            <ButtonGroup>
                                                <Button
                                                    onClick={() =>
                                                        deleteEvent(member)
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        setEditMember(
                                                            member.memberId
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Tab.Panel>
                        <Tab.Panel className={'w-[50vw]'}>
                            <h1 className="flex justify-center">Manage All:</h1>
                            {members.map((member) => (
                                <div
                                    key={member.memberId}
                                    className="bg-white rounded-lg border-black border-[1px] p-4 shadow-md"
                                >
                                    {editMember === member.memberId ? (
                                        <div>
                                            <EditMember
                                                setEditMember={setEditMember}
                                                member={member}
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                {member.name}
                                            </h4>
                                            <p>
                                                Choir Status:{" "}
                                                {member.status.type ===
                                                "Active" ? (
                                                    <span className="text-green-500">
                                                        {member.status.type}
                                                    </span>
                                                ) : (
                                                    <span className="text-red-500">
                                                        {member.status.type}
                                                    </span>
                                                )}
                                            </p>
                                            <p>Email: {member.email}</p>
                                            <p>Phone: {member.phone}</p>
                                            <p>
                                                Auditioned:{" "}
                                                {member.hasAuditioned ? (
                                                    <span className="text-green-500">
                                                        {member.hasAuditioned.toString()}
                                                    </span>
                                                ) : (
                                                    <span className="text-red-500">
                                                        {member.hasAuditioned.toString()}
                                                    </span>
                                                )}
                                                
                                            </p>
                                            <p>
                                                Vocal Range:{" "}
                                                {member.voicing.type}
                                            </p>
                                            <ButtonGroup>
                                                <Button
                                                    onClick={() =>
                                                        deleteEvent(member)
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        setEditMember(
                                                            member.memberId
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            {addMember && <AddSubscriber setAddMember={setAddMember} />}
        </div>
    );
}
