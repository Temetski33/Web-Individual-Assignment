const postRegister = async (username, password, email) => {
  try {
    const resp = await fetch(
      'https://media2.edu.metropolia.fi/restaurant/api/v1/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
        }),
      }
    );
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

export {postRegister};
