let user = [
    ["Gulay", 1234],
    ["Gulay", 7539],
  ];
  
  function add() {
    let username = document.getElementById("inp-1").value;
    let password = document.getElementById("inp-2").value;
  
    let check = user.find(user => user[0] === username && user[1] == password);
  
    if (check) {
      console.log("Giris olundu");
    } else {
      console.log("Melumatlar yanlisdir");
    }
  }