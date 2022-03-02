export default function App() {
  // will come from backend
  let subject = "Hello Universe";
  let user = { id: 1, username: "rahul", city: "mumbai" };

  return (
    <div>
      <h1>{subject}</h1>
      <p>{user?.username}</p>
    </div>
  );
}
