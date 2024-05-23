import User from "./User";
import { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Handle successful response
        setusers(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div  style={{display:"flex",justifyContent:"center" ,flexWrap:"wrap"}}>
      {users?.map((e, i) => {
        return (
          <div key={i}>
            <User user={e} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
