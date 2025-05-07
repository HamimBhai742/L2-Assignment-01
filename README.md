
# What is the use of the keyof keyword in TypeScript? Provide an example.

# Understanding the keyof Keyword in TypeScript (With Example)

TypeScript is a powerful superset of JavaScript that brings type safety and advanced tooling to the language we all love. One of its lesser-known but incredibly useful features is the keyof keyword. If you've ever wanted to build more flexible, type-safe, and scalable applications, understanding keyof is a must.

##  What is keyof in TypeScript?
The keyof keyword is a TypeScript operator used to extract the keys of a given object type as a union of string literal types.
#### It tells TypeScript, “Give me all the property names of this type.”

###  Why Use keyof?
- ####  Enforces type safety while accessing properties dynamically
- #### Helps prevent bugs when working with key-value pairs
- ####  Essential for building generic utility functions
- ####  Works seamlessly with mapped types and generics

### Example: 
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User; // 'id' | 'name' | 'email'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {

  return obj[key];
}

const user: User = {
  id: 1,
  name: "Hamim",
  email: "hamim@gmail.com",
};

const userName = getProperty(user, "name"); //  OK

const userAge = getProperty(user, "age");   //  Error '.


# Provide an example of using union and intersection types in TypeScript.

# Union and Intersection Types in TypeScript - With Examples

TypeScript is a powerful extension of JavaScript that gives developers type safety while writing flexible and scalable applications. Among its many features, two essential yet sometimes confusing ones are Union types and Intersection types.

## What is a Union Type?
A union type in TypeScript allows a variable to hold more than one type of value. It’s like saying:
#### “This value can be either this type or that type.”

### Example:
function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
  }

printId(101);

printId("USER-ABC"); 

## What is an Intersection Type?
An intersection type combines multiple types into one. You can think of it like:
#### “This value must have all properties from these types.”

## Example:
type User = {
  name: string;
  email: string;
};

type Admin = {
  isAdmin: boolean;
  role: "admin";
};

type AdminUser = User & Admin;

const adminUser: AdminUser = {
  name: "Hamim",
  email: "hamim@gmail.com",
  isAdmin: true,
  role: "admin"
};

