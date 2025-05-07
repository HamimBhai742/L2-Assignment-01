
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

