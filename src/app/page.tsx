// @react-server-client-only
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import contract from './utils/contract';


export default function Home() {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState<number>(0); // Assuming student ID is a number
  const [studentClass, setStudentClass] = useState('');

  const addStudent = async () => {
    await contract.methods.addStudentDetails(studentName, studentID, studentClass).send({ from: window.defaultAccount });

    alert("Student details added successfully!");
  };

  const getStudentDetails = async () => {
    const result = await contract.methods.getStudentDetails(studentName).call();
    const [name, ID, studentClass] = result;

    const detailsElement= document.getElementById('studentDetails');
    detailsElement.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                                 <p><strong>ID:</strong> ${ID}</p>
                                 <p><strong>Class:</strong> ${studentClass}</p>`;
  };
  return (
    <AnimatePresence>
      <>
      <div className="mx-auto flex flex-col justify-center  h-[100vh]">
      <section className="mx-auto bg-white/20 backdrop-blur-md p-8 rounded-md">
        <h1 className="font-bold text-center mb-8">Student Details</h1>
        <div className="">
          <label className="font-bold mr-1">Name : </label>
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="mt-2 rounded-md p-1" />
        </div>
        <div className="">
          <label className="font-bold mr-1"> ST-ID : </label>
          <input type="number" value={studentID} onChange={(e) => setStudentID(Number(e.target.value))} className="mt-2 rounded-md p-1" />
        </div>
        <div className="">
          <label className="font-bold mr-1"> CLASS:</label>
          <input type="number" value={studentClass} onChange={(e) => setStudentClass((e.target.value))} className="mt-2 rounded-md p-1" />
        </div>
        <div className="text-center">
           <button onClick={addStudent} className="bg-blue-700 m-2 p-1  hover:bg-blue-900 rounded-md">Add Student</button>
        </div>
       
   
        <h2>View Student Details</h2>
        <div>
          <label className="font-bold mr-1">Name:</label>
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)}  className="rounded-md p-1"/>
        </div>
        <button className="bg-blue-700 p-1 hover:bg-blue-900">View Details</button>
        {/* <div>
          {studentDetails.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div> */}
      </section>

    </div>
      </>
    </AnimatePresence>
  );
}
