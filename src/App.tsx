// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // const items = ["New York", "San Francisco", "Korea", "London", "Greece"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities/Countries"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // return (
  //   <div>
  //     {/* <Alert text="Don't Click This!" /> */}
  //     <Alert>
  //       <h1>Don't Click This!</h1>
  //     </Alert>
  //   </div>
  // );

  return (
    <div>
      <Button onClick={() => console.log("Click")}>Don't Click</Button>
    </div>
  );
}

export default App;
