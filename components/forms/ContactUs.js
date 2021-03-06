const ContactUsForm = () => {
  const userContactUs = (event) => {
    event.preventDefault(); // Stop redirecting page
  };

  return (
    <form onSubmit={userContactUs}>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' autoComplete='name' required />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactUsForm;
