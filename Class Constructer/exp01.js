class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const fullName = new user("Muhammad Adnan", "adnan@gmail.com", "123")

console.log(fullName.encryptPassword());