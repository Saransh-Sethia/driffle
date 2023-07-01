import React from "react";
import "./Dashboard1.css";

const Dashboard1 = () => {
  return (
    <div className="container">
      <div className="icon1">
        <div className="img-bx" style={{ "--i": 1 }}>
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNj8TcDIRlE1rRVg8RIgs9VBYB0W4r27HpQ&usqp=CAU"
          />
        </div>
      </div>
      <div className="icon1">
        <div className="img-bx" style={{ "--i": 2 }}>
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2k5ktRo9du45zb6POa6eWeY3WD160TzbwYw&usqp=CAU"
          />
        </div>
      </div>
      <div className="icon1">
        <div className="img-bx" style={{ "--i": 3 }}>
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFt1u6mxqVST29V8B8YsIxDIvxb3aS0_5kSLdMJF6SHGGZUmuEDF0ZIIMYnhb4Kj1rysw&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
