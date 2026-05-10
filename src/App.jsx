import { useState } from "react";

import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import Card from "./components/Card";
import Input from "./components/Input";
import SmallInput from "./components/SmallInput";
import TableRow from "./components/TableRow";

export default function App() {

 

  const [role, setRole] = useState("Admin");

  const [openRole, setOpenRole] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const [error, setError] = useState("");


  const [subject, setSubject] = useState("");
  const [faculty, setFaculty] = useState("");
  const [minClasses, setMinClasses] = useState("");
  const [maxClasses, setMaxClasses] = useState("");

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      subject: "Data Structures",
      min: 2,
      max: 4,
    },
  ]);

  const [generated, setGenerated] = useState(false);


  const handleLogin = () => {

    

    if (
      role === "Admin" &&
      id === "admin123" &&
      password === "admin"
    ) {
      setLoggedIn(true);
      setError("");
    }

   

    else if (
      role === "Teacher" &&
      id === "teacher123" &&
      password === "teacher"
    ) {
      setLoggedIn(true);
      setError("");
    }



    else if (
      role === "Student" &&
      id === "student123" &&
      password === "student"
    ) {
      setLoggedIn(true);
      setError("");
    }

    else {
      setError("Invalid ID or Password ");
    }
  };



  const handleLogout = () => {

    setLoggedIn(false);

    setId("");
    setPassword("");

    alert("Logged Out Successfully ");
  };

  const renderDashboard = () => {

  

  if (role === "Admin") {

    return (

      <div className="text-5xl font-bold text-blue-600">
        Admin Dashboard
      </div>

    );
  }

 

  if (role === "Teacher") {

    return (

      <div className="text-5xl font-bold text-green-600">
        Teacher Dashboard
      </div>

    );
  }

  

  if (role === "Student") {

    return (

      <div className="text-5xl font-bold text-purple-600">
        Student Dashboard
      </div>

    );
  }
};


  const addSubject = () => {

    if (
      !subject ||
      !faculty ||
      !minClasses ||
      !maxClasses
    ) {
      alert("Please fill all fields");
      return;
    }

    const newSubject = {
      id: Date.now(),
      subject,
      faculty,
      min: minClasses,
      max: maxClasses,
    };

    setSubjects([...subjects, newSubject]);

    setSubject("");
    setFaculty("");
    setMinClasses("");
    setMaxClasses("");
  };


  const removeSubject = (id) => {

    setSubjects(
      subjects.filter((item) => item.id !== id)
    );
  };


  const generateTimetable = () => {

    if (subjects.length === 0) {
      alert("No subjects available");
      return;
    }

    setGenerated(true);

    alert("Timetable Generated Successfully ");
  };

  return (

    <div className="h-screen w-full bg-gray-200 flex items-center justify-center p-6">


      {!loggedIn ? (

        <div className="w-[450px] bg-white rounded-2xl shadow-xl p-8 space-y-6">

          <h1 className="text-4xl font-bold text-center">
            Login Portal
          </h1>
<div className="relative">

  <button
    onClick={() => setOpenRole(!openRole)}
    className="w-full h-14 bg-blue-600 text-white rounded-xl text-lg font-bold flex items-center justify-between px-5"
  >

    {role}

    <span className="text-xl">
      ⌄
    </span>

  </button>

  {
    openRole && (

      <div className="absolute top-16 left-0 w-full bg-white border rounded-xl shadow-lg overflow-hidden z-50">

        <button
          onClick={() => {
            setRole("Admin");
            setOpenRole(false);
          }}
          className="w-full text-left px-5 py-4 hover:bg-gray-100"
        >
          Admin
        </button>

        <button
          onClick={() => {
            setRole("Teacher");
            setOpenRole(false);
          }}
          className="w-full text-left px-5 py-4 hover:bg-gray-100"
        >
          Teacher
        </button>

        <button
          onClick={() => {
            setRole("Student");
            setOpenRole(false);
          }}
          className="w-full text-left px-5 py-4 hover:bg-gray-100"
        >
          Student
        </button>

      </div>

    )
  }

</div>

          <div className="space-y-4">

            <input
              type="text"
              placeholder={`${role} ID`}
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full h-14 border rounded-xl px-4 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 border rounded-xl px-4 outline-none"
            />

          </div>

          <button
            onClick={handleLogin}
            className="w-full py-4 bg-black text-white rounded-xl text-lg font-bold"
          >
            Login
          </button>

       

          {
            error && (
              <div className="text-red-500 text-center font-semibold">
                {error}
              </div>
            )
          }

        </div>

      ) : (

       

    <div className="w-full h-screen overflow-y-auto">

          <div className="w-full h-full bg-white rounded-md overflow-hidden shadow-lg flex">

            <Sidebar handleLogout={handleLogout} />

           <div className="flex-1 bg-[#f5f5f8] flex flex-col overflow-y-auto">

              <TopNavbar role={role} />
<div className="flex-1 flex items-center justify-center">
  {renderDashboard()}
</div>
            

                  <Card title="Faculty Constraints">

                    <div className="space-y-6">

                      <Input
                        label="Subject"
                        placeholder="Enter subject"
                        value={subject}
                        onChange={(e) =>
                          setSubject(e.target.value)
                        }
                      />

                      <Input
                        label="Faculty"
                        placeholder="Enter faculty"
                        value={faculty}
                        onChange={(e) =>
                          setFaculty(e.target.value)
                        }
                      />

                      <div>

                        <label className="text-lg font-semibold text-gray-700 block mb-3">
                          Faculty Load
                        </label>

                        <div className="grid grid-cols-2 gap-4">

                          <SmallInput
                            placeholder="Min Classes"
                            value={minClasses}
                            onChange={(e) =>
                              setMinClasses(e.target.value)
                            }
                          />

                          <SmallInput
                            placeholder="Max Classes"
                            value={maxClasses}
                            onChange={(e) =>
                              setMaxClasses(e.target.value)
                            }
                          />

                        </div>

                      </div>

                      <button
                        onClick={addSubject}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                      >
                        Add Subject
                      </button>

                    </div>

                  </Card>

                

                  <Card title="Subject Limits">

                    <div className="overflow-hidden rounded-xl border">

                      <table className="w-full text-left">

                        <thead className="bg-gray-100">

                          <tr>
                            <th className="p-4">Subject</th>
                            <th className="p-4">Min</th>
                            <th className="p-4">Max</th>
                            <th className="p-4">Action</th>
                          </tr>

                        </thead>

                        <tbody>

                          {subjects.map((item) => (

                            <TableRow
                              key={item.id}
                              subject={item.subject}
                              min={item.min}
                              max={item.max}
                              onDelete={() =>
                                removeSubject(item.id)
                              }
                            />

                          ))}

                        </tbody>

                      </table>

                    </div>

                  </Card>

                 

                  <Card title="Timetable Status">

                    <div className="flex flex-col gap-6">

                      <div className="text-2xl font-semibold text-gray-700">
                        Total Subjects: {subjects.length}
                      </div>

                      <div className="text-xl text-gray-600">

                        Status:

                        {
                          generated
                            ? " Timetable Generated "
                            : " Not Generated "
                        }

                      </div>

                      <button
                        onClick={generateTimetable}
                        className="py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
                      >
                        Generate Timetable
                      </button>

                    </div>

                  </Card>

                </div>

              </div>

            </div>

      )}

    </div>
  );
}