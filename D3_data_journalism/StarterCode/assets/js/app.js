// @TODO: YOUR CODE HERE!


//Create a function to build chart
function buildChart(chartdata) {
    // Define SVG area dimensions
    var svgWidth = 960;
    var svgHeight = 500;

    // Define the chart's margins as an object
    var margin = {
        top: 60,
        right: 60,
        bottom: 60,
        left: 60
    };

    // Define dimensions of the chart area
    var chartWidth = svgWidth - margin.left - margin.right;
    var chartHeight = svgHeight - margin.top - margin.bottom;
    
    // Select body, append SVG area to it, and set its dimensions
    var svg = d3.select("#scatter")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .append("g")



}
//Read the data in - import csv data
function getData() {
    d3.csv("assets/data/data.csv").then(function(data) {
    console.log(data);
    //format used data as numbers
    data.forEach(d=> {
        d.poverty = +d.poverty;
        d.healthcare = +d.healthcare;

    });
}  


//Print the console.log and see what there is?
getData();

// Add x axis


// Add y axis


// Add y label



//Add dots to gdots


//Add text to gdots
