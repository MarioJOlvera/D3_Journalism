// @TODO: YOUR CODE HERE!

let svgWidth = 860;
let svgHeight = 500;

let margin = {
    top: 20,
    right: 10,
    bottom: 30,
    left: 20
};

let width = svgWidth - margin.right - margin.left;
let height = svgHeight - margin.top - margin.bottom;

let chart = d3.select("#scatter")
    .append("div")
    .classed("chart",true);

let svg = chart.append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function(data) {
    
    data.forEach(d => {
        d.poverty = +d.poverty
        d.healthcare = +d.healthcare
    })

    // Scale functions

    let xLinearScale = d3.scaleLinear()
        .domain([8, d3.max(data, d=>d.poverty)])
        .range([0,width])

    let yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(data, d=>d.healthcare)])
        .range([height,0])

    // Axis function

    let xAxis = d3.axisBottom(xLinearScale)
    let yAxis = d3.axisLeft(yLinearScale)

    // Append axes to the chart

    chartGroup.append("g")
        .attr("transform",`translate(0, ${height})`)
        .call(xAxis);

    chartGroup.append("g")
        .call(yAxis);

    // Create circles
    let circlesGroup = chartGroup.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.healthcare))
        .attr("r","10")
        .attr("fill","blue")
        .attr("stroke-width","1")
        .attr("stroke","black");

    // Initializa tool tip
    let toolTip = d3.tip()
        .attr("class","tooltip")
        .ofset([80, -60])
        .html(function(d) {
            return(`${d.state} <br> Poverty % ${d.poverty} <br> Healthcare % : ${d.healthcare}`)
        });

    // Tooltip in the chart
    chartGroup.call(toolTip);

    // Listeners
    circlesGroup.on("click", d => {
        toolTip.show(d,this)
    }).on("mouseout",(d,i) => {
        toolTip.hide(d)
    })

    let textGroup = chartGroup.selectAll('.stateText')
        .data(data)
        .enter()
        .append("text")
        .classed("stateText", true)
        .attr("x", d => xLinearScale(d.poverty))
        .attr("y",  d => yLinearScale(d.healthcare))
        .attr("r","10")
        .attr("font-size","10px")
        .text(function(d){return d.abbr});

    // Axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("Lacks Healthcare (%)");

    chartGroup.append("text")
        .attr("transform", `tanslate(${width}, ${height+margin.top})`)
        .attr("class","axisText")
        .text("In Poverty (%)");
}).catch(function(error){
    console.log(error);
})




