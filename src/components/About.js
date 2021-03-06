import React from "react";

export const About = () => {
  let myDesign = {
    minHeight: "90vh",
  };
  return (
    <div style={myDesign} className="container">
        <div> 

            <h2 className="text-center">what does a todo list do for you?</h2>
            <hr></hr>
      <h4>
        It's a list of tasks you need to complete, or things that you want to
        do. ... You can use a to do list in your home and personal life, or in
        the workplace.Having a list of everything you need to do written down in
        one place means you shouldn't forget anything important.
      </h4>
      <hr></hr>

      <h4>
        Most typically, they’re organised in order of priority. Traditionally,
        they’re written on a piece of paper or post it notes and acts as a
        memory aid. As technology has evolved we have been able to create a todo
        lists with excel spreadsheets, word documents, email lists, todo list
        apps, microsoft to do and google to do list to name a few. You can use a
        to do list in your home and personal life, or in the workplace. Having a
        list of everything you need to do written down in one place means you
        shouldn’t forget anything important. By prioritising the tasks in the
        list you plan the order in which you’re going to do them and can quickly
        see what needs your immediate attention and what tasks you can leave
        until a little later.
      </h4>
      </div>
    </div>
  );
};
