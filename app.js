function Mapping(arr, callback) {
    let result = [];
    let map = 0;
  
    for (let i = 0; i < arr.length; i++) {
      map = callback(map, arr[i]);
      result.push(map);
    }
  
    return result;
  }
  
  
  function callback(previousSum, currentElement) {
    return previousSum + currentElement;
  }
  
  function performMapping() {
    const arrayInput = document.getElementById('arrayInput');
    const userInput = arrayInput.value.trim();
  
    if (!userInput) {
      alert('Veuillez entrer un tableau valide.');
      return;
    }
  
    const userArray = userInput.split(',').map(Number);
    const mappedResult = Mapping(userArray, callback);
  
    alert(`Résultat du mappage : ${mappedResult.join(', ')}`);
  }
  