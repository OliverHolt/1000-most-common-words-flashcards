function scrapeTableData() {
    // Find the table rows
    const rows = document.querySelectorAll('figure.wp-block-table > table > tbody > tr');
    
    // Initialize an array to hold our objects
    const dataObjects = [];
    
    // Skip the first row if it's headers, adjust the loop start index as needed
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].querySelectorAll('td');
      
      // Assuming the structure is Number, Spanish, English
      if (cells.length === 3) {
        const obj = {
          id: parseInt(cells[0].textContent.trim(), 10),
          language1: cells[1].textContent.trim(), // Spanish
          language2: cells[2].textContent.trim() // English
        };
        
        dataObjects.push(obj);
      }
    }
    
    // Log the result to the console or return it for further use
    console.log(dataObjects);
    return dataObjects;
  }
  
  // Execute the function
  scrapeTableData();

  


  //Swaps language1 and language2 in each object of a given array
  function languageSwap(arr) {
    return arr.map(item => {
      let temp = item.language1;
      item.language1 = item.language2;
      item.language2 = temp;
      return item;
    });
  }