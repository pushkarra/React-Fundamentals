import React from "react";
const Employee = (props) => {
    const { firstName, lastName, age } = props;
    return (
        <div>
            <h6>
                Employee Name: {firstName} {lastName} Who is of age: {age}
            </h6>
        </div>
    );
};
export default Employee;