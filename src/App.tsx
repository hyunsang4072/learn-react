import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Korea", "London", "Greece"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities/Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
