import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const notify = () => toast.success("Ready");

  const submitTest = async () => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(),
    });
  };

  return (
    <section className="mt-12 px-4 md:px-16 py-12 bg-white text-gray-900">
      <h2 className="text-2xl font-bold">CONTACT US</h2>
      <button type="button" onClick={notify}>
        Test
      </button>
      <button type="button" onClick={submitTest}>
        Submit Test
      </button>
      <ToastContainer />
    </section>
  );
};

export default ContactUs;
