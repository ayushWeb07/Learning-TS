// creation of a simple enum
enum Status {
    Unread= "unread",
    Seen= "seen", 
    Replied= "replied"
}


const email: {
    from: string,
    subject: string,
    status: Status
}= {
    from: "abc@gmail.com",
    subject: "Let's talk about Astra AI",
    status: Status.Unread
}

console.log(email)