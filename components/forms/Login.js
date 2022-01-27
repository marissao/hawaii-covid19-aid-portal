const LoginForm = () => {
  const userLogsIn = (event) => {
    event.preventDefault(); // Stop redirecting page
    // Add form logic here
  };

  return (
    <form onSubmit={userLogsIn}>
      <input
        type='text'
        id='username'
        placeholder='Username'
        autoComplete='username'
        required
      />
      <input
        type='text'
        id='password'
        placeholder='Password'
        autoComplete='current-password'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default LoginForm;
