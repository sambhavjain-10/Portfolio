import React, { useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const API_PATH = "/api/email-controller.php";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef(null);
  const submitRef = useRef(null);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("message", data.message);

    axios.post(API_PATH, formData).then(() => {
      formRef.current.reset();
      submitRef.current.value = "SENT SUCCESSFULLY";
      submitRef.current.style.width = "155px";
      submitRef.current.style.background = "#48FF55";
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <div className="col">
        <div className="inputbox">
          <input type="text" {...register("name")} required />
          <span className="text">Name</span>
          <span className="line"></span>
        </div>
      </div>
      <div className="col">
        <div className="inputbox">
          <input
            type="text"
            {...register("email", {
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            required
          />
          <span className="text">Email</span>
          <span className="line"></span>
          {errors.email && <span className="error">*Invalid Email</span>}
        </div>
      </div>
      <div className="col">
        <div className="inputbox">
          <input
            type="text"
            {...register("mobile", {
              pattern: /^\d{10}$/,
            })}
            required
          />
          <span className="text">Mobile</span>
          <span className="line"></span>
          {errors.mobile && <span className="error">*Invalid Mobile</span>}
        </div>
      </div>
      <div className="col">
        <div className="inputbox textarea">
          <textarea {...register("message")} required />
          <span className="text">Message</span>
          <span className="line"></span>
        </div>
      </div>
      <input type="submit" id="send" value="Send" ref={submitRef} />
    </form>
  );
}

export default Form;
