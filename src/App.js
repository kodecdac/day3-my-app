// Interpolation ::
function App() {
  let name = "John";
  let city = "New York";
  let age = 30;
  let isMarried = false;

  // IMPORTANT
  let user = { username: "rahul", city: "mumbai" };
  let userr = undefined;

  return (
    <h1>
      Hello, {name} frommmm {city}!
      <br />
      You are {age} years old.
      <br />
      You are {isMarried ? "Married" : "UnMarried"}.
      <br />
      {user.username} is from {user.city}.
      <br />
      {userr?.username}
    </h1>
  );
}

export default App;
