import { useStateValue } from "@/context";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  fullname: "",
  lastname: "",
  profession: "",
  birthdate: "", 
  gender: "",
  bio: "",
};

const Create = () => {
  const [user, setUser] = useState(initialState);
  const { setUserData } = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, { ...user, id: uuidv4() }]);
    setUser(initialState);
  };

  return (
    <div className="container w-full px-4 py-6">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          required
          value={user.fullname}
          onChange={(event) =>
            setUser({ ...user, fullname: event.target.value })
          }
          className="border"
          type="text"
          placeholder="fullname.."
        />

        <input
          required
          value={user.lastname}
          onChange={(event) =>
            setUser({ ...user, lastname: event.target.value })
          }
          className="border"
          type="text"
          placeholder="lastname"
        />

        <input
          required
          value={user.profession}
          onChange={(event) =>
            setUser({ ...user, profession: event.target.value })
          }
          className="border"
          type="text"
          placeholder="profession"
        />

        <input
          required
          value={user.birthdate}
          onChange={(event) =>
            setUser({ ...user, birthdate: event.target.value })
          }
          className="border"
          type="date"
          placeholder="birthdate"
        />

        <select
          required
          value={user.gender}
          onChange={(event) => setUser({ ...user, gender: event.target.value })}
          className="border"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          required
          value={user.bio}
          onChange={(event) => setUser({ ...user, bio: event.target.value })}
          className="border"
          type="text"
          placeholder="bio"
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
