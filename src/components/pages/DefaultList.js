import React, {useState} from "react";
import "../css/DefaultList.css"
const DefaultList = () => {
    const [users, setUsers] = useState([
        {
            username: "Alice",
            userid: 1,
            age: 25,
            role: "Admin",
            department: "Finance"
        },
        {
            username: "Bob",
            userid: 2,
            age: 30,
            role: "Employee",
            department: "Sales"
        },
        {
            username: "Charlie",
            userid: 3,
            age: 35,
            role: "Manager",
            department: "Marketing"
        },
        {
            username: "David",
            userid: 4,
            age: 40,
            role: "Admin",
            department: "IT"
        }, {
            username: "Emma",
            userid: 5,
            age: 45,
            role: "Employee",
            department: "Marketing"
        }, {
            username: "Frank",
            userid: 6,
            age: 50,
            role: "Manager",
            department: "Finance"
        }, {
            username: "Grace",
            userid: 7,
            age: 55,
            role: "Admin",
            department: "Sales"
        }, {
            username: "Henry",
            userid: 8,
            age: 60,
            role: "Employee",
            department: "IT"
        }, {
            username: "Isabella",
            userid: 9,
            age: 65,
            role: "Manager",
            department: "Finance"
        }, {
            username: "John",
            userid: 10,
            age: 70,
            role: "Admin",
            department: "Sales"
        }, {
            username: "Kate",
            userid: 11,
            age: 75,
            role: "Employee",
            department: "Marketing"
        }, {
            username: "Liam",
            userid: 12,
            age: 80,
            role: "Manager",
            department: "IT"
        }, {
            username: "Mia",
            userid: 13,
            age: 85,
            role: "Admin",
            department: "Finance"
        }, {
            username: "Noah",
            userid: 14,
            age: 90,
            role: "Employee",
            department: "Sales"
        }, {
            username: "Olivia",
            userid: 15,
            age: 95,
            role: "Manager",
            department: "Marketing"
        }
    ]);

    const [ageFilter, setAgeFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const [deptFilter, setDeptFilter] = useState("");

    const roles = ["Admin", "Manager", "Employee"];
    const departments = ["Finance", "Sales", "Marketing", "IT"];

    const handleAgeChange = (e) => {
        setAgeFilter(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRoleFilter(e.target.value);
    };

    const handleDeptChange = (e) => {
        setDeptFilter(e.target.value);
    };

    const filteredUsers = users.filter((user) => {
        return((!ageFilter || user.age === parseInt(ageFilter)) && (!roleFilter || user.role === roleFilter) && (!deptFilter || user.department === deptFilter));
    });

    return (
        <center>
            <div className="top">
                <h4>User List</h4>
                <label>Age:</label>
                <select value={ageFilter}
                    onChange={handleAgeChange} className="button">
                    <option value="">--All--</option>
                    {
                    [...new Set(users.map((user) => user.age))].map((age) => (
                        <option key={age}
                            value={age}>
                            {age} </option>
                    ))
                } </select>
                <label>Role:</label>
                <select value={roleFilter}
                    onChange={handleRoleChange} className="button">
                    <option value="">--All--</option>
                    {
                    [...new Set(users.map((user) => user.role))].map((role) => (
                        <option key={role}
                            value={role}>
                            {role} </option>
                    ))
                } </select>
                <label>Dept:</label>
                <select value={deptFilter}
                    onChange={handleDeptChange} className="button">
                    <option value="">--All--</option>
                    {
                    [...new Set(users.map((user) => user.department))].map((department) => (
                        <option key={department}
                            value={department}>
                            {department} </option>
                    ))
                } </select>
                <table >
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>User ID</th>
                            <th>Age</th>
                            <th>Role</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody> {
                        filteredUsers.map((user) => (
                            <tr key={
                                user.userid
                            }>
                                <td>{
                                    user.username
                                }</td>
                                <td>{
                                    user.userid
                                }</td>
                                <td>{
                                    user.age
                                }</td>
                                <td>{
                                    user.role
                                }</td>
                                <td>{
                                    user.department
                                }</td>
                            </tr>
                        ))
                    } </tbody>
                </table>
            </div>
        </center>
    );
};

export default DefaultList;
