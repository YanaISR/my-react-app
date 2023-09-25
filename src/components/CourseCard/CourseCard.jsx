import React from "react";
import "./CourseCard.css";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";
import UserInfo from "./UserInfo";
import CourseDetailes from "./CourseDetailes";
import UserProgress from "./UserProgress";

const CourseCard = ({ course }) => {
  return (
    <div className="card">
      <CourseImage imageUrl={course.image} level={course.level} />
      <CourseTitle title={course.title} />
      <UserInfo
        avatarUrl={course.user.avatar}
        username={course.user.name}
        rating={course.rating}
      />
      {course.isMyCource ? (
        <UserProgress
          finishedModules={course.finishedModules}
          allModules={course.modules}
        />
      ) : (
        ""
      )}
      <CourseDetailes
        students={course.students}
        modules={course.modules}
        duration={course.duration}
      />
    </div>
  );
};

export default CourseCard;
