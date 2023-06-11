import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Korea", "London", "Greece"];

  return (
    <div>
      <ListGroup items={items} heading="Cities/Countries" />
    </div>
  );
}

export default App;
