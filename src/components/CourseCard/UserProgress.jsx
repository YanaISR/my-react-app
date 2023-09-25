import React from "react";

const UserProgress = (props) => {
  const { finishedModules, allModules } = props;
  const progressPercent = (finishedModules / allModules) * 100;
  return (
    <div>
      <div>
        <progress value={finishedModules} max={allModules}></progress>
        <div className="card__info">
          <p>
            {finishedModules} / {allModules} Modules
          </p>
          <div>{progressPercent}%</div>
        </div>
      </div>
    </div>
  );
};

export default UserProgress;
