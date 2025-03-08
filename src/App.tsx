// import Card from "./Components/Card"
import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
   let tList: Array<string> = ["Abiram", "López", "Hernández"];

   const handleSelect = (data: string) => {
      console.log(data);
   }

   return <Card>
      <CardBody Title="Titulo" Text="El texto del componente" Subtitle="Subtitle" />
      <List data={tList} onSelect={handleSelect} />
   </Card>


   // return <Card body={"Hola mundo"} />
   // return <CardBody Title="Titulo" Text="El texto del componente" Subtitle="Subtitle" />
}

export default App
