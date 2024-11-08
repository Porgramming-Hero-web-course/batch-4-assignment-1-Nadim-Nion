# 1. The significance of union and intersection types in Typescript.

---

## Answer:
Union types are used when a value can be more than a single type

such as when a variable types can be string or boolean.

Using | to denote union types

Example:

```
const printId = (id: number | string): void => {
console.log(`Your ID is: ${id}`);
}

printId(12);
printId(abc);
```

Intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require

Using | to denote union types

Example:

```
interface Student { 
  student_id: number; 
  name: string; 
} 
  
interface Teacher { 
  Teacher_Id: number; 
  teacher_name: string; 
} 
  
type intersected_type = Student & Teacher; 
  
let obj1: intersected_type = { 
  student_id: 123, 
  name: "nion", 
  Teacher_Id: 7873, 
  teacher_name: "Mezba", 
}; 
  
console.log(obj1.Teacher_Id); 
console.log(obj1.name);
```