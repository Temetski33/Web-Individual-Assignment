const postLogin = async (username, password) => {
  try {
    const resp = await fetch(
      'https://media2.edu.metropolia.fi/restaurant/api/v1/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error('fetch failed:', err);
  }
};

export {postLogin};
