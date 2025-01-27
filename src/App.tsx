import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 100, category: "Food" },
    { id: 2, description: "bbb", amount: 100, category: "Food" },
    { id: 3, description: "ccc", amount: 100, category: "Food" },
    { id: 4, description: "ddd", amount: 100, category: "Food" },
    { id: 5, description: "eee", amount: 100, category: "Food" },
    { id: 6, description: "fff", amount: 100, category: "Food" },
  ]);
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;

// import Form from "./components/Form.tsx";

// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// };

// export default App;

// import { IoCalendarNumberSharp } from "react-icons/io5";

// function App() {
//   return (
//     <div>
//       <IoCalendarNumberSharp color="blue" size="40" />
//     </div>
//   );
// }

// export default App;

// import Button from "./components/Button";
// import Alert from "./components/Alert";
// import { useState } from "react";

// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisible(true)}>
//         Button
//       </Button>
//     </div>
//   );
// }
// export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Ney york", "Los Angeles", "Chicago", "Houston", "Phoenix"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={"Cities"}
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }
// export default App;

// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello<span> World</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;
