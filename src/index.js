const { uuid } = require('uuidv4');

export class StorageService{

    constructor() {
        this.map = new Map();
    }

    generateId() {
        while (true) {
            let id = uuid();
            if (!this.map.has(id)) {
                return id;
            }
        }
    }

    equals(object1, object2){
        if (object1 === object2) return true;
        if ((object1 instanceof Object) && (object2 instanceof Object)) return true;
        if ((object1 instanceof Array) && (object2 instanceof Array)) return true;
        if (object1.constructor === object2.constructor) return true;
        return false;
    }

    add(someObject) {
        let id = this.generateId();
        this.map.set(id, someObject)
        console.debug("New object added.")
        return id;
    }

    getById(id) {
        console.debug("Object with id %s recieved.", id);
        return this.map.get(id);
    }

    getAll() {
        console.debug("All objects recieved.");
        return this.map.values();
    }

    deleteById(id) {
        console.debug("Object with id %s deleted.", id);
        return this.map.delete(id)
    }

    updateById(id, someObject) {
        if (this.map.has(id)) {
            let lastObject = this.map.get(id);
            if (this.equals(someObject, lastObject)) {
                for (let i in lastObject) {
                    lastObject[i] = someObject[i];
                }
                console.debug("Object with id %s updated.", id);
                return true;
            } else {
                console.error("Objects aren`t equals.");
            }
        }else {
            console.error("Update error! Map hasn`t id %s", id);
        }
        return false;
    }

    replaceById(id, someObject) {
        if (this.map.has(id)) {
            this.map.set(id, someObject);
            console.debug("Object with id %s replaced.", id);
            return true;
        } else {
            console.error("Replace error! Map hasn`t id %s", id);
            return false;
        }
    }

}