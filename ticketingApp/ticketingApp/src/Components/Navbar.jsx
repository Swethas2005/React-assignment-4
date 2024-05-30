// Packages
import React from 'react'
import { Link } from 'react-router-dom'
import {Flex, Spacer} from '@chakra-ui/react'

// local imports
import "../styles/Tickets.css" // import Tickets.css

export default function Navbar() {
  return (
    <Flex id="navbar" p={4} >
      <Spacer />
      <Link to='/'>Home </Link> {/* Link to Home page*/}
      <Spacer />
      <Link to='/about'>About </Link> {/* Link to About page*/}
      <Spacer />
      <Link to='/contact'>Contact </Link> {/* Link to Contact page*/}
      <Spacer />
      <Link to='/tickets'>Tickets </Link> {/* Link to Tickets page*/}
      <Spacer />
      <Link to='/login'>Login </Link> {/* Link to Login page*/}
      <Spacer />
    </Flex>
  )
}
