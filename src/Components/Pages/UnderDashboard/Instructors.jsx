import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [users, setUser] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/api/instructors")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <>
      <div className="w-10/12 mx-auto text-center">
        {users && (
          <div>
            <div>
              <h1 className="font-bold text-5xl text-center my-4">
                Instructors
              </h1>
            </div>
            <div className="overflow-x-auto flex justify-center my-12 ">
              <table className="table table-zebra text-xl">
                {/* head */}
                <thead className="text-xl">
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <Link
                          to={`/singleproduct/${users._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Be Admin
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Instructors;
