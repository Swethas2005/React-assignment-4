// Packages
import React from "react";
import { Container, Input, Select, Button, Textarea,useToast } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

// local imports
import LoadingIndicator from "../Components/LoadingIndicator"; // import LoadingIndicator.jsx
import ErrorIndicator from "../Components/ErrorIndicator"; // import ErrorIndicator.jsx
import axios from "axios";

// URl for API
let API_URL = `http://localhost:3004/data`; // Base url for fetching data.


export default function TicketEdit() {
  let [loading, setLoading] = useState(false); // state for loading ticket.status.
  let [error, setError] = useState(false); // state for error ticket.status.
  let navigate = useNavigate(); // invocking the useNavigate hook for the pupose of navigation.
  let toast = useToast(); // invocking the useToast hook from chakra ui.
  let { ticketId } = useParams();
  let [formState,setFormState] = useState({
    title: "",
    priority: "" ,
    status: "",
    description:"",
    assignee: "",
  })
  

  // function to handle edit button
  async function handleEdit (e) {
    e.preventDefault();
    setLoading(true);
    try {
      let editData = await axios({
        method:"put",
        url:`${API_URL}/${ticketId}`,
        data:formState,
      })
      setLoading(false)
      if (editData.status === 200) {
        toast({
          title: `Ticket edited successfully`,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        navigate(`/tickets/view/${ticketId}`);
      }
      
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }

  }
  
  // function to handle change in input fields
  function handleInputChange(e) {
    let { name, value } = e.target; // destructuring and taking name and value from e.target
    let formValue = name === "priority" ? +value : value; // changing priority from string to number
    setFormState({ ...formState, [name]: formValue });
    setError(false);
  }
 
  // function for fetching data.
  async function getData(ticketId) {
    setLoading(true);
    try {
      let data = await axios({
        method: "GET",
        url: `${API_URL}/${ticketId}`,
      });
      setLoading(false);
      setFormState({
        title:data?.data.title,
        priority: data?.data.priority,
        status: data?.data.status,
        description: data?.data.description,
        assignee: data?.data.assignee,
      })
      // console.log(data?.data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }
 

  useEffect(() => {
    getData(ticketId)
  },[ticketId])

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
         Edit Ticket
      </h1>
      <Container
        borderRadius={10}
        marginBottom={7}
        boxShadow={
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
        }
        padding={5}
        marginTop={2}
      >
        <form onSubmit={handleEdit}>
          {/*Title section*/}
          <label
            htmlFor="title"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Enter the title <span style={{ color: "red" }}>*</span>
            <Input
              id="title"
              placeholder="Enter the title of the ticket"
              size="lg"
              marginTop={1}
              marginBottom={2}
              name="title"
              value={formState.title}
              onChange={handleInputChange}
            />
          </label>

          {/*Description section*/}
          <label
            htmlFor="description"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Enter title Description <span style={{ color: "red" }}>*</span>
            <Textarea
              id="description"
              rows="1"
              cols="51"
              style={{
                border: "1px solid lightGray",
                borderRadius: "5px",
                marginTop: "5px",
                padding: "10px 17px",
                fontSize: "18px",
              }}
              placeholder="Enter the description"
              name="description"
              value={formState.description}
              onChange={handleInputChange}
            ></Textarea>
          </label>

          {/*Assignee section*/}
          <label
            htmlFor="assignee"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Select the Assignee <span style={{ color: "red" }}>*</span>
            <Select
              size="lg"
              id="assignee"
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "8px",
              }}
              name="assignee"
              value={formState.assignee}
              onChange={handleInputChange}
            >
              <option value="">Select the assignee</option>
              <option value="Rocky">Rocky</option>
              <option value="Sophia">Sophia</option>
              <option value="Liam">Liam</option>
              <option value="Emma">Emma</option>
              <option value="Olivia">Olivia</option>
              <option value="Noah">Noah</option>
              <option value="Ava">Ava</option>
              <option value="William">William</option>
              <option value="James">James</option>
              <option value="Mia">Mia</option>
            </Select>
          </label>

          {/*Status Section*/}
          <label
            htmlFor="status"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Select the Status <span style={{ color: "red" }}>*</span>
            <Select
              size="lg"
              id="status"
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "10px",
              }}
              name="status"
              value={formState.status}
              onChange={handleInputChange}
            >
              <option value="">Select the status</option>
              <option value="Pending">Pending</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>
            </Select>
          </label>

          {/*Priority section*/}
          <label
            htmlFor="priority"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Select the Priority <span style={{ color: "red" }}>*</span>
            <Select
              size="lg"
              id="priority"
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginTop: "5px",
                marginBottom: "8px",
              }}
              name="priority"
              value={formState.priority}
              onChange={handleInputChange}
            >
              <option value="">Select the priority</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </Select>
          </label>
          <Button
            colorScheme="blue"
            variant="solid"
            fontSize={"20px"}
            marginTop={4}
            padding={"25px 190px"}
            type="submit"
          >
            Edit Ticket
          </Button>
        </form>
      </Container>
    </>
  )
}
