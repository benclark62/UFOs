// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
    tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
            cell.text(val);
        });
    });
}

// 1. Create a variable to keep track of all the filters as an object.
let filters = {}

    // updateFilters() function  saves element, value, and the
    // id of the filter that was changed
function updateFilters() {

    let changedElement = d3.select(this);
    let elementValue = changedElement.property("value");
    console.log(elementValue);
    
    let filteredID = changedElement.attr("id");
    console.log(filteredID);

    if (elementValue){
    filters[filteredID] = elementValue;
        }
    else {
        delete filters[filteredID];
        }
    
    filterTable();
}

// Use filterTable() function to loop through all of the filters
// and keep any data that matches filter values
function filterTable() {

    filteredData = tableData

// Loop through all of the filters and keep any data that
// matches the filter values
    Object.entries(filters).forEach(([key,value]) => {
        filteredData = filteredData.filter(x => x[key] === value)
        console.log(key,value)
    })

// Finally, rebuild the table using the filtered data
    buildTable(filteredData)

    console.log(filteredData)
}
// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData)