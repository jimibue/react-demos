import axios from "axios";
import { useEffect, useState } from "react";
import DemoContainer from "./DemoContainer";

const AxiosGet = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await axios.get("https://reqres.in/api/users?delay=3");
      setUsers(res.data.data);
    } catch (err) {
      setError(true);
    }
    setLoading(true);
  };
  return (
    <DemoContainer header='Getting Users with Axios' code={AxiosGetCode}>
      <p>Users</p>
      {JSON.stringify(users)}
    </DemoContainer>
  );
};

export default AxiosGet;

export const AxiosGetCode =`//
import axios from "axios";
import { useEffect, useState } from "react";
import DemoContainer from "./DemoContainer";

const AxiosGet = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await axios.get("https://reqres.in/api/users?delay=3");
      setUsers(res.data.data);
    } catch (err) {
      setError(true);
    }
    setLoading(true);
  };
  return (
    <>
      <p>Users</p>
      {JSON.stringify(users)}
    </>
  );
};

export default AxiosGet;` 
