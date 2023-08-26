"use client";

import React, { useEffect, useState } from "react";
import { emailRegex, passwordRegex } from "../lib/regex";
import ShowPassword from "../components/ShowPassword";

const Signup = () => {
  const [details, setDetails] = useState({"First Name": '', "Last Name": '', Email: '', Password: ''});
  const [error, setError] = useState({ email: "", password: "" });

  const alertError = (type: string) => {
    if (type === "email") {
      setError({ ...error, email: "Please type in a valid email" });
    } else {
      setError({ ...error, password: "Password must be at least 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit." });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type) {
      case "First Name": {
        setDetails({...details, "First Name": e.currentTarget.value})
        break
      }
      case "Last Name": {
        setDetails({...details, "Last Name": e.currentTarget.value})
        break
      }
      case "Email": {
        setDetails({...details, Email: e.currentTarget.value})
        setError({ ...error, email: "" });
        break
      }
      case "Password": {
        setDetails({...details, Password: e.currentTarget.value})
        break
      }
    }
  }

  useEffect(() => {
    if (details.Password.length < 8) return alertError("password")
    setError({...error, password: ''})
  }, [details.Password])

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    //check if email is in the correct format
    if (!emailRegex.test(details.Email)) {
      alertError("email");
      return;
    }

    //check if password is in the correct format
    if (!passwordRegex.test(details.Password)) {
      alertError("password");
      return;
    }

    // const error = await signIn(email.trim(), password.trim());

    // if (error) {
    //   setError({ ...error, password: error });
    //   return
    // }
  };

  const detailsArray = Object.entries(details)

  return (
    <section className="w-full max-w-sm h-[600px] flex flex-col gap-1 p-4 md:p-4 bg-slate-100 rounded-lg shadow">
      <h2 className="w-full py-2 text-center capitalize font-bold text-3xl">create an account</h2>
      <div className="w-full h-[1px] bg-slate-900/20"></div>
      <form className="w-full h-full flex flex-col justify-between py-4" noValidate onSubmit={handleLogin}>
      <div className="w-full grid gap-4">
      {detailsArray.map(([detail, value]) => <div key={detail} className="w-full flex flex-col gap-0.5">
          <label className="relative text-lg font-bold" htmlFor={detail}>{detail}
          <input
            id={detail}
            name={detail}
            className="w-full h-10 text-base p-2 rounded"
            type={detail === "Password" ? "password" : "text"}
            placeholder={detail}
            value={value}
            onChange={(e) => handleChange(e, detail)}
            />
          {detail === "Password" && <ShowPassword inputId={detail} />}
          </label>
          {detail === "Email" ? <span className="w-full text-center text-[12px] text-red-600">{error.email}</span>
          : detail === "Password" ? <span className="w-full text-center text-[12px] text-red-600">{error.password}</span> : null}
        </div>)}
      </div>
        <article className="w-full flex flex-col justify-center items-end gap-2">
          <button className="w-full text-center p-2 uppercase rounded-lg text-slate-50 hover:text-slate-900 bg-slate-900 hover:bg-slate-400" type="submit">
            create an account
          </button>
          <p className="cursor-pointer hover:underline">Already have an account? Click here to login</p>
        </article>
      </form>
    </section>
  );
};

export default Signup