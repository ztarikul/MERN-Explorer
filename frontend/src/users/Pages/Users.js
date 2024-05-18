import React from "react";
import UsersList from "../Components/UsersList";

const Users = () => {

    const USERS = [
        { id: 'u1', name: 'Mr. Jhon', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D', places: 3 },
        { id: 'u2', name: 'Mrs. Daiana', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D', places: 2 }
    ];


    return (
        <UsersList items={USERS} />
    )
}

export default Users;