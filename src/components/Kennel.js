import React from "react"
import { NavBar } from "./nav/Navbar.js"
import { ApplicationViews } from "./ApplicationViews.js"
import "./Kennel.css"

//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)