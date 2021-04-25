import {StorageService} from "./index.js"

const storage = new StorageService();
let myId1 = storage.add(123456);
let myId2 = storage.add(String("MyItem"));
let myId3 = storage.add(new Object("MyObject"));
let myId4 = storage.add(null);
let myId5 = storage.add({name: "user"});

let myNewObject1 = storage.getById(myId1);
console.log("Id %s: " + JSON.stringify(myNewObject1), myId1);
let myNewObject2 = storage.getById(myId5);
console.log("Id %s: " + JSON.stringify(myNewObject2), myId5);

console.log("All objects: ", JSON.stringify(storage.getAll()));

storage.deleteById(myId2);
storage.deleteById(myId3);

console.log("All objects: ", JSON.stringify(storage.getAll()));

storage.updateById(myId4, String("MyNewStringObject"));
storage.updateById(myId1, 987654);
console.log("All objects: ", JSON.stringify(storage.getAll()));

storage.replaceById(myId3, String("MyReplacedStringObject"))
console.log("All objects: ", JSON.stringify(storage.getAll()));