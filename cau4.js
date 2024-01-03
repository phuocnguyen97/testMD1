class PhoneBook {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let phoneBooks = [
    new PhoneBook ()
];
let addContact1 = new PhoneBook ();
addContact1.name = "Nguyễn Văn A";
addContact1.phoneNumber = "0987654321";
addContact1.email = "exam1@gmail.com";

let addContact2 = new PhoneBook ();
addContact2.name = "Đặng Văn B";
addContact2.phoneNumber = "0987654345";
addContact2.email = "exam2@gmail.com";

let addContact3 = new PhoneBook ();
addContact3.name = "Trần Văn D";
addContact3.phoneNumber = "0357654325";
addContact3.email = "exam3@gmail.com";

phoneBooks.push(addContact1);

function searchContact(name) {
    
}
