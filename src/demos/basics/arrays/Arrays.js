import Visualizer from "../../../components/Visualizer";
import Map from "../Map";
import Filter from "./Filter";
import MapDouble from "./MapDouble";
import ReduceBasic from "./ReduceBasic";
import ReduceCharCount from "./ReduceCharCount";

const Arrays = (props) => {
  return (
    <div style={{ flex: 1, }}>
      <h1>Arrays</h1>
      <p>
        this demostrates how to do CRUD (CREATE READ UPDATE DESTROY) in React
      </p>
      <Visualizer
        header="Reduce: find sum"
        array={[1, 2, 3]}
        accumStart={0}
        nextAccumCB={(acc, num) => acc + num}
        code={`
          //--
          let arr = [1, 2, 3]
          let finalReturnValue = arr.reduce((accum, num)=>{
              accum += num
              return accum
          })
        `}
      />
      <Visualizer
        header="Filter: Remove Evens"
        array={[1, 2, 3, 4, 5, 6]}
        accumStart={[]}
        nextAccumCB={(acc, num) => (num % 2 === 0 ? acc : [...acc, num])}
        code={`
        // describe
        let arr = [1, 2, 3, 4, 5, 6]
        let finalReturnValue = arr.filter((num)=>{
            return num % 2 !== 0
        })
      `}
      />
      <Visualizer
        header="OBJ"
        array={[
          { name: "james", age: 28 },
          { name: "tony", age: 7 },
          { name: "bob", age: 22 },
          { name: "bob", age: 6 },
        ]}
        accumStart={[]}
        nextAccumCB={(acc, t) =>
          t.age > 21 ? acc : [...acc, `<p>${t.name} is over 21<p>`]
        }
      />
      <Visualizer
        header="MAP: Upadte OBJ"
        array={[
          { id: 1, name: "james", age: 28 },
          { id: 2, name: "tony", age: 7 },
          { id: 3, name: "bob", age: 22 },
          { id: 4, name: "bob", age: 6 },
        ]}
        accumStart={[]}
        nextAccumCB={(acc, t) =>
          t.id === 3 ? [...acc, { ...t, name: "CHANGED" }] : [...acc, t]
        }
        code={`
        // describe
        let arr = [
            {id:1, name: "james", age: 28 },
            {id:2, name: "tony", age: 7 },
            {id:3, name: "bob", age: 22 },
            { id:4,name: "bob", age: 6 },
          ]
        let finalReturnValue = arr.map((person)=>{
            return person.id === 3 ? {...person, name:'Changed'}:person
        })
      `}
      />
      <MapDouble />
      <Map />
      <Filter />
      <ReduceBasic />
      <ReduceCharCount />
    </div>
  );
};

export default Arrays;
