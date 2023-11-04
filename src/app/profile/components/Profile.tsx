import React from "react";

const Profile = ({ user }: { user: any }) => {
  return (
    <div>
      <p>Name: {user?.name}</p>
      <h2>email: {user?.email}</h2>
    </div>
  );
};

export default Profile;
