// Packages
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; // axios for fetching data from API.
import {
  Button,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Container,
  Select,
} from "@chakra-ui/react"; // importing chakra ui items3 from @chakra-ui/react
import {useNavigate} from "react-router-dom";

// URl for API
let API_URL = `http://localhost:3004/data`; // Base url for fetching data.

// local imports
import LoadingIndicator from "../Components/LoadingIndicator"; // import LoadingIndicator.jsx
import ErrorIndicator from "../Components/ErrorIndicator"; // import ErrorIndicator.jsx

export default function Tickets() {
  let [tickets, setTickets] = useState([]); // state for storing tickets data.
  let [loading, setLoading] = useState(false); // state for loading status.
  let [error, setError] = useState(false); // state for error status.
  let [filterPriority, setFilterPriority] = useState(""); // state for filtered data.
  let [sortStatus, setSortStatus] = useState(""); // state for sorted data.
  let navigate = useNavigate();

  async function getData(sortStatus,filterPriority) {
    // function for fetching data.
    setLoading(true);

    let queryParams = {};
    if(filterPriority) { // if filterPriority is not empty then add it to queryParams.
      queryParams.status = filterPriority;
    }
    if(sortStatus) { // if sortStatus is not empty then add it to queryParams.
      queryParams._sort = "priority";
      queryParams._order = sortStatus;

    }

    try {
      let data = await axios({
        method: "GET",
        url: API_URL,
        params: queryParams
        
      });
      setLoading(false);
      setTickets(data?.data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getData(sortStatus,filterPriority);
  }, [sortStatus, filterPriority]);

  if (loading) {
    // if loading is true then show LoadingIndicator.
    return <LoadingIndicator />;
  }
  if (error) {
    // if error is true then show ErrorIndicator.
    return <ErrorIndicator />;
  }

  function handleFilter(e) { // function to handle change in filter select tag.
    e.preventDefault();
    setFilterPriority(e.target.value);
    console.log(e.target.value);
  }

  function handleSort(e) { // function to handle change in sort select tag.
    e.preventDefault();
    setSortStatus(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      {/* Button Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          marginTop: "20px",
        }}
      >
        {/* Select tag for sorting data based on priority*/}
        <Select placeholder="Sort By Priority" size="lg" width={"500px"} value={sortStatus} onChange={handleSort}>
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </Select>
        {/*Select tag for filtering data based on status*/}
        <Select placeholder="Filter By Status" size="lg" width={"500px"} value={filterPriority} onChange={handleFilter}>
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
        {/* Button for creating ticket */}
        <Button colorScheme="green" variant="solid"  padding={"22px 25px"} fontSize={20} onClick={() => navigate("/tickets/createTicket")}>
          Create Ticket
        </Button>
      </div>

      {/*Displaying the tickets in this section*/}
      <Container
        maxW={"7xl"}
        padding={"10px"}
        marginTop={"20px"}
        marginBottom={"20px"}
      >
        <SimpleGrid spacing={4} templateColumns="repeat(4, 1fr)">
          {tickets.map((ticket) => {
            let { title, status, priority, id } = ticket;
            return (
              <Card width={"300px"} backgroundColor={"white"} key={id} p={1} boxShadow={ "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}>
                <CardHeader
                  width={"fit-content"}
                  padding={"16px 14px 10px 20px"}
                >
                  <Heading size="md" width={"fit-content"} height={"48px"}>
                    Title: {""}
                    {title}
                  </Heading>
                </CardHeader>
                <hr />
                <CardBody padding={"16px 14px 10px 20px"} width={"fit-content"}>
                  <Text fontSize={18} width={"fit-content"}>
                    Status: <span  style={{color: status == "Pending" ? "red" : status == "Progress" ? "orange" : "green", fontWeight: status == "Pending" ? "bolder" : status == "Progress" ? "500" : "600"}}>{status} {status == "Completed" ? "✅" : ""}</span>
                  </Text>
                </CardBody>
                <CardBody padding={"16px 14px 10px 20px"} width={"fit-content"}>
                  <Text fontSize={18} width={"fit-content"}>
                    Priority: {priority}
                  </Text>
                </CardBody>
                <CardFooter width={"fit-content"}>
                  <Button colorScheme="blue" variant="solid" onClick={() => navigate(`/tickets/view/${id}`)}>
                    View Ticket
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}
