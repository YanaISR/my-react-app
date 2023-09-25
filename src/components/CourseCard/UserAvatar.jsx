import React from "react";

const UserAvatar = (props) => {
  const { avatarUrl, username } = props;
  return (
    <div>
      <img src={avatarUrl} alt={username} />
    </div>
  );
};

export default UserAvatar;
