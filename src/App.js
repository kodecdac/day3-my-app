export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <AnyName />
    </div>
  );
}

// NOTE :: CaptialCase
// html, body, h1, div
// UserDefined Tag :: Component :: <AnyName />
function AnyName() {
  return <div>Hello I am Any!!</div>;
}
