import React from "react";

const CourseImage = (props) => {
  const { imageUrl, level } = props;
  return (
    <div>
      <div className="image__container">
        <img src={imageUrl} alt="" />
        <div className="level">{level}</div>
      </div>
    </div>
  );
};

export default CourseImage;
