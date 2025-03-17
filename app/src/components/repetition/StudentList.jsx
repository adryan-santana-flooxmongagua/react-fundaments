import React from "react";
import student from "../data/student";

export default props => {

  const studentLI = student.map((student) => {
    return (
        <li key={student.id}>
            {student.id} {student.name} -> {student.nota}
        </li>
    );
});

return (
    <div>
        <ul style={{ listStyle: "none" }}>{studentLI}</ul>
    </div>
);
};