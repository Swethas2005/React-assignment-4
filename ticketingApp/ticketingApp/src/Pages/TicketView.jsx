// Packages
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Card,
  Stack,
  ButtonGroup,
  useToast,
  Heading,
  CardBody,
  Text,
  CardFooter,
} from "@chakra-ui/react"; // importing button from @chakra-ui/react

// local imports
import LoadingIndicator from "../Components/LoadingIndicator"; // import LoadingIndicator.jsx
import ErrorIndicator from "../Components/ErrorIndicator"; // import ErrorIndicator.jsx

// URl for API
let API_URL = `http://localhost:3004/data`; // Base url for fetching data.

export default function TicketView() {
  let { ticketId } = useParams(); // getting ticketId from URL
  let [ticket, setTicket] = useState([]); // state for storing tickets data.
  let [loading, setLoading] = useState(false); // state for loading ticket.status.
  let [error, setError] = useState(false); // state for error ticket.status.
  let toast = useToast(); // invocking the useToast hook from chakra ui.
  let navigate = useNavigate(); //invocking the useNavigate hook for the pupose of navigation.

  async function getData(ticketId) {
    // function for fetching data.
    setLoading(true);
    try {
      let data = await axios({
        method: "GET",
        url: `${API_URL}/${ticketId}`,
      });
      setLoading(false);
      setTicket(data?.data);
      // console.log(data?.data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  async function handleDelete() {
    // function to delete the ticket
    setLoading(true);
    try {
      let data = await axios({
        method: "delete",
        url: `${API_URL}/${ticketId}`,
      });
      if (data.status === 200) {
        toast({
          title: `Ticket deleted successfully`,
          status: "success",
          isClosable: true,
          duration: 2000,
        });
        setTicket(null);
        navigate("/tickets");
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getData(ticketId);
  }, [ticketId]);

  if (loading) {
    // if loading is true then show LoadingIndicator.
    return <LoadingIndicator />;
  }
  if (error) {
    // if error is true then show ErrorIndicator.
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "30px", paddingTop: "20px" }}>
        Ticket View Page
      </h1>
      {ticket && (
        <Card
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"20px"}
          maxW={"350px"}
          boxShadow={
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
          }
        >
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md" id="title">
                Title: {ticket.title}
              </Heading>
              <hr />
              <Text id="description" fontSize={"18px"} fontWeight={"500"}>
                {ticket.description}
              </Text>
              <Text id="ticket.status" fontSize={"18px"} fontWeight={"500"}>
                Status:{" "}
                <span
                  style={{
                    color:
                      ticket.status == "Pending"
                        ? "red"
                        : ticket.status == "Progress"
                        ? "orange"
                        : "green",
                    fontWeight:
                      ticket.status == "Pending"
                        ? "bolder"
                        : ticket.status == "Progress"
                        ? "500"
                        : "600",
                  }}
                >
                  {ticket.status} {ticket.status == "Completed" ? "✅" : ""}
                </span>
              </Text>
              <Text id="priority" fontSize={"18px"} fontWeight={"500"}>
                Priority: {ticket.priority}
              </Text>
              <Text id="assignee" fontSize={"18px"} fontWeight={"500"}>
                Assignee: {ticket.assignee}
              </Text>
            </Stack>
          </CardBody>
          <hr />
          <CardFooter>
            <ButtonGroup spacing="5">
              <Button
                variant="solid"
                colorScheme="green"
                p={"15px 25px"}
                fontSize={"18px"}
                onClick={() => {
                  navigate(`/tickets/view/edit/${ticketId}`);
                }}
              >
                Edit Ticket
              </Button>
              <Button
                variant="solid"
                colorScheme="red"
                p={"15px 25px"}
                fontSize={"18px"}
                onClick={handleDelete}
              >
                Delete Ticket
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      )}

      <Button
        variant="solid"
        colorScheme="blue"
        p={"15px 25px"}
        fontSize={"18px"}
        marginLeft={"635px"}
        marginTop={"20px"}
        onClick={() => {
          navigate("/tickets");
        }}
      >
        Back to Tickets
      </Button>
    </>
  );
}

// {
//   "id": 4,
//   "title": "Integrate payment gateway",
//   "priority": 7,
//   "status": "Pending",
//   "description": "Integrate payment gateway for processing transactions",
//   "assignee": "Emma"
//   },
