import { useEffect, useState } from "react";
import useToken from "../hooks/useToken";
import axios from "axios";


function Profile() {
  const [message, setMessage] = useState(null);
  const { token } = useToken();

  useEffect(() => {
    async function fetchMessage() {
      try {
        const res = await axios.get("http://localhost:8080/hello/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res)
        setMessage(res.data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    }

    fetchMessage();
  }, [token]);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
}

export default Profile;
