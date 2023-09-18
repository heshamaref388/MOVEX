import React from "react";
import image from "../photo_2023-02-18_17-31-17.jpg";
export default function About() {
  return (
    <div className=" d-flex justify-content-center align-items-center ">
      <div className=" ">
        {" "}
        <div className=" text-center col-md-4 w-25 m-auto mb-3 mt-5">
          <img
            src={image}
            alt=""
            className="w-100 text-center rounded-circle "
          />
        </div>
        <div className="mb-3 textlight">
          Name : Hesham Aref Abd_Elsalam Mohamed
        </div>
        <div className="mb-3 textlight">Age : 22</div>
        <div className="mb-3 textlight">Email :heshamaref38@gmail.com</div>
        <div className="mb-3 textlight">
          LinkdedIn :{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hesham-aref-b14b53255"
            rel="noreferrer"
            className=" textnon"
          >
            linkedin Account
          </a>{" "}
        </div>
        <div className="mb-3 textlight">
          facebook :{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/hesham.aref.980?mibextid=ZbWKwL"
            rel="noreferrer"
            className=" textnon"
          >
            facebook Account
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
