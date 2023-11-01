import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["İstanbul", "Ankara", "İzmir", "Konya"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="primary" onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;
