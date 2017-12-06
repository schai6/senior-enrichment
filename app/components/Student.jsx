import React from 'react';
const Student = (props) => {
  return (
    <div>
      <ul>
        {props.students.map(student => {
          return (
            <li key={student.id}>{student.name}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Student;
