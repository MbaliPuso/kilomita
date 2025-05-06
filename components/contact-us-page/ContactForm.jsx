"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "../common/Field";
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitForm = async (formData) => {
    try {
      const response = await fetch(
        "https://demos.kickass.co.za/noctis/form/mail/index.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.name,
            email: formData.email,
            contact: formData.contact,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.status) {
        toast.success(result.message || "Message sent successfully!");
        reset();
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Form submission error:", error);
    }
  };
  return (
    <div className="sofax-field-box ml-50">
      <ToastContainer position="bottom-right" />
      <h3>Send us a message</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="sofax-main-field">
              <Field label="Your Name" error={errors.name}>
                <input
                  {...register("name", { required: "Name is required." })}
                  type="name"
                  name="name"
                  id="name"
                />
              </Field>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sofax-main-field">
              <Field label="Contact" error={errors.contact}>
                <input
                  {...register("contact", { required: "Contact is required." })}
                  type="text"
                  name="contact"
                  id="name"
                />
              </Field>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="sofax-main-field">
              <Field label="Enter email address" error={errors.email}>
                <input
                  {...register("email", { required: "Email is required." })}
                  type="email"
                  name="email"
                  id="email"
                />
              </Field>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="sofax-main-field">
              <label>Message</label>
              <textarea
                name="textarea"
                placeholder="Write Your Comment"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tac">
              <button id="sofax-submit-btn" className="mt-30" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
