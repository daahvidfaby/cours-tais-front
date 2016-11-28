var users = [
    {nom: "Jane", age: 25},
    {nom: "John", age: 12},
    {nom: "Mary", age: 17},
    {nom: "Hans", age: 22},
];

function getNames(users){
  return users.map(function(e){
    return e.nom;
  });
}
