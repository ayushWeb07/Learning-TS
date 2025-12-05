// creation of a simple object

const person: {
  name: {
    firstName: string;
    lastName: string;
  };

  age: number;

  canVote: boolean;

  dreams: string[];
} = {
  name: {
    firstName: "Ayush",
    lastName: "Bommana",
  },

  age: 18,

  canVote: true,

  dreams: ["AMG", "911", "Impact", "Teach"],
};


console.log(person)