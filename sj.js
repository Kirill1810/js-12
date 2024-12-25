// //1

const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  

  user.mood = 'happy';
  

  user.hobby = 'skydiving';
  

  user.premium = false;
  

  for (let key of Object.keys(user)) {

    console.log(`${key}: ${user[key]}`);

  }



//   //2

  function countProps(obj) {
    return Object.keys(obj).length;
  }


  const user = {
    name: "kirill",
    age: 15,
  
 
  };
  
  console.log(countProps(user));

  //3

  const employeesBase = {
    kirill: 8,
    sasha: 4000,
    ura: 90,
    ivan: 100,
  };
  
  function findBestEmployee(employees) {

    let maxEmployes = 0;

    let nameBest = "";

    for (const ents of Object.entries(employees)) {

      let names = ents[0];

      let workes = ents[1];

      if (workes > maxEmployes) {

        maxEmployes = workes;

        nameBest = names;
      }
    }
    
    return nameBest;
  }
  
  console.log(findBestEmployee(employeesBase));


  //4


  const salary = {
    Oleg: 200,
    Karina: 500,
    Arina: 700,
  };
  
  function countTotalSalary(employes) {
    let sumSalary = 0;
    const valueArray = Object.values(employes);
    for (let i = 0; i < valueArray.length; i++) {
      sumSalary += valueArray[i];
    }
    for (const arr of Object.entries(salary)) {
      const keys = arr[0];
      const valueses = arr[1];
      console.log(`${keys}: ${valueses}`);
    }
    return ` сума зарплати  становить ${sumSalary} грн`;
  }
  console.log(countTotalSalary(salary));
  

  //5

  function getAllPropValues(arr, prop) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i][prop]);
    }
    return result;
  }


  const users = [
    { name: 'Аня', age: 15 },
    { name: 'Ваня', age: 300 },
    { name: 'Саня', age: 50 }
  ];
  
  console.log(getAllPropValues(users, 'name')); 
  console.log(getAllPropValues(users, 'age'));  
  //6

  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].name === productName) {
        totalPrice += allProducts[i].price * allProducts[i].quantity;
      }
    }
    return totalPrice;
  }

  const products = [
    { name: 'диня', price: 2, quantity: 1 },
    { name: 'яблуко', price: 5, quantity: 8 },
    { name: 'кавун', price: 3, quantity: 10 },
   
  ];
  

  console.log(calculateTotalPrice(products, 'Apple'));  
  console.log(calculateTotalPrice(products, 'Banana')); 
  console.log(calculateTotalPrice(products, 'Grapes')); 