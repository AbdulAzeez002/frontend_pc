import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/services";

const Users = ({ setSelectedUser, selectedUser }) => {
  const [users, setUsers] = useState([]);

  const handleSelect = (e) => {
    setSelectedUser?.(e.target.value);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getAllUsers();
      if (users) {
        setUsers(users);
      }
    } catch (error) {
      console.log(error, "error while fetching users");
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a User
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleSelect}
          value={selectedUser}
        >
          <option defaultChecked>Choose a user</option>
          {users?.map((user) => (
            <option key={user?._id} value={user?._id}>
              {user?.MemberName}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Users;
