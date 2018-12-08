import React from "react";
import "./Header.css";
import moment from "moment";

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];

const HeaderTitle = props => {
  return (
    <div>
      <h1 className="display-name">Lambda School</h1>
      <h2 className="user-name">@LambdaSchool</h2>
      <time className="time-stamp">
        {moment().date()} {months[moment().month()]}
      </time>
    </div>
  );
};

export default HeaderTitle;
