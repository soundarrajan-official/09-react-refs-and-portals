# React Refs and Portals 

Advance DOM access and value management

## Uses 

- Accessing DOM Elements with Refs 
- Managing values with Refs 
- Exposing API functions from Components 
- Detaching DOM rendering from JSX Structure with Portals

## State

- Causes component reevaluation (re-execution) when changed
- Should be used for values that are directly reflected in UI
- Should not be used for "behind the scenes" values that have no direct UI impact

## Refs

- Do not cause component reevaluation when changed
- Can be used to gain direct access to DOM elements (-> great for reading values or accessing certain browser APIs)
