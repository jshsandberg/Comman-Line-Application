// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email);
        this.git = git;
        
    }

    getGithub() {
        return (this.git);
    }

    getRole() {
        return (this.role = "Engineer");
    }
}

module.exports = Engineer