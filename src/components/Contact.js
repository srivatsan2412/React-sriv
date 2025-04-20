const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
      <form>
        <div className="flex flex-col gap-4 m-4 w-6/12">
          <input
            type="text"
            placeholder="Name"
            className="border border-solid border-black p-2 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-solid border-black p-2 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="border border-solid border-black p-2 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="px-2  bg-green-200 rounded-lg cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
