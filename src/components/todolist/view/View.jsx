import { useStateValue } from "@/context";
import React from "react";

const View = () => {
  const { userData } = useStateValue();
  console.log(userData);

  return (
    <div className="container ">
      <div className="mt-10 flex gap-10">
        {userData?.map((user) => (
          <div
            key={user.id}
            className="max-w-sm rounded-lg p-10 overflow-hidden shadow-lg bg-white"
          >
            <h3 className="text-2xl font-semibold">
              User Name: {user.fullname}
            </h3>
            <p className="mt-2 text-gray-600">Last Name: {user.lastname}</p>
            <p className="mt-2 text-gray-600">Profession: {user.profession}</p>
            <p className="mt-2 text-gray-600">BirthDate: {user.birthdate}</p>
            <p className="mt-2 text-gray-600">Gender: {user.gender}</p>
            <p className="mt-2 text-gray-600">Bio: {user.bio}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
