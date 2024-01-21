import { useState } from 'react';
import contract from '../src/app/utils/contract';

const StudentDetails: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [studentDetails, setStudentDetails] = useState<string[]>([]);

  const addStudent = async () => {
    // Implement the function to add student details to the contract
  };

  const getStudentDetails = async () => {
    // Implement the function to get student details from the contract
  };

  return (
    <div>
      <h1>Student Details</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      </div>
      <button onClick={addStudent}>Add Student</button>
      <hr />
      <h2>View Student Details</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
      </div>
      <button onClick={getStudentDetails}>View Details</button>
      <div>
        {studentDetails.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
