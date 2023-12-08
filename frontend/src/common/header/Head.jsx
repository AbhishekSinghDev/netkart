import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label className="cursor-pointer hover:text-sky-300">
              {" "}
              +88012 3456 7894
            </label>
            <i className="fa fa-envelope"></i>
            <label className="cursor-pointer hover:text-sky-300">
              {" "}
              support@netkart.com
            </label>
          </div>
          <div className="right row RText">
            <label className="cursor-pointer hover:text-sky-300">
              Theme FAQ"s
            </label>
            <label className="cursor-pointer hover:text-sky-300">
              Need Help?
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
