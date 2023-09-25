import React from "react";

const CourseDetailes = (props) => {
  const { students, modules, duration } = props;
  return (
    <div>
      <div className="card__info">
        <div>{students} Student</div>
        <div>{modules} Modules</div>
        <div>{duration}</div>
      </div>
    </div>
  );
};

export default CourseDetailes;
