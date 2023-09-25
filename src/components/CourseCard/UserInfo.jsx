import React from "react";
import UserAvatar from "./UserAvatar";

const UserInfo = (props) => {
  const { rating, username } = props;
  return (
    <div>
      <div className="card__info">
        <div className="user">
          <UserAvatar {...props} />
          <p>{username}</p>
        </div>
        <div className="rating">
          <p> {rating} </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
