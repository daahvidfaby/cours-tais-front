var users = [
    {nom: "Jane", age: 25},
    {nom: "John", age: 12},
    {nom: "Mary", age: 17},
    {nom: "Hans", age: 22},
];

function getToBeOfAge(users){ // to be of age = être majeur
    return users.filter(function(e){
      return e.age >= 18;
    });


}
