const PreQualificationForm = () => {
  const userPreQualifies = (event) => {
    event.preventDefault(); // Stop redirecting page
    // Add form logic here
  };

  return (
    <form onSubmit={userPreQualifies}>
      <input type='text' id='fname' placeholder='First Name' required />
      <input type='text' id='lname' placeholder='Last Name' required />
      <input type='email' id='email' placeholder='Email Address' required />
      <input
        type='email'
        id='confirm-email'
        placeholder='Confirm Email Address'
        required
      />
      <input
        type='tel'
        id='phone'
        placeholder='xxx-xxx-xxxx'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        required
      />
      <input
        type='tel'
        id='confirm-phone'
        placeholder='Re-enter xxx-xxx-xxxx'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        required
      />
      {/* Add address, last 4 ssn, and self-verification checkboxes*/}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default PreQualificationForm;
