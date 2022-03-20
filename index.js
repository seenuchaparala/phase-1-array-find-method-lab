let superbowlWin = (record) => {
    const result = record.find( row => row.result === "W" );
    return result ? result.year : undefined;
  }  
    
    
    const record = [
        {year: "2018", result: "L"},
        {year: "2017", result: "W"},
        {year: "2016", result: "N/A"}
        //...
      ] 

console.log(superbowlWin(record));