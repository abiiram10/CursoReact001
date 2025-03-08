// import Card from "./Components/Card"
import Card, { } from "./Components/Card";
import List from "./Components/List";
import Button from "./Components/Button";
import { useState } from "react";

function App() {

   let [data, setData] = useState(["Abiram", "López", "Hernández"]);

   return <Card>
      <Button onClick={() => {
         setData([...data, "Minium"]);
      }}>
         Add
      </Button>

      <Button onClick={() => {
         setData(data.slice(0, -1));
      }}>
         Remove
      </Button>


      <List data={data} />
   </Card>;


   // let tList: Array<string> = ["Abiram", "López", "Hernández"];

   // const handleSelect = (data: string) => {
   //    console.log(data);
   // }

   // return <Card>
   //    <CardBody Title="Titulo" Text="El texto del componente" Subtitle="Subtitle" />
   //    {
   //       tList.length != 0 ? <List data={tList} onSelect={handleSelect} /> : "Sin elementos"
   //    }
   //    <Button children={<h1>Hola</h1>} />
   // </Card>


   // return <Card body={"Hola mundo"} />
   // return <CardBody Title="Titulo" Text="El texto del componente" Subtitle="Subtitle" />
}

export default App
