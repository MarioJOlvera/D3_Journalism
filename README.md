# Data Journalism and D3

![Newsroom](https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif)

## Background

Code developed for analyzing the current trends shaping people's lives, as well as to create interactive charts, graphs, and elements to help readers understand the findings.

The editor wants to run a series of feature stories about the health risks facing particular demographics. Examine information from the US Census Bureau and the Behavioral Risk Factor Surveillance System.

Besides, the data set included is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml). As well as the current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error.

To start, I need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` and/or `Smokers vs. Age`.

Using the D3 techniques I have learned in the BootCamp, I create a scatter plot that represents each state with circle elements. I've code this graphic in the `app.js` file of this challenge. This code include state abbreviations in the circles. Being as follows:

<img src="Images/4-scatter.jpg">

- - -

### For impress the Boss 

Besides, using distinct types of D3 techniques to interact with our data. As follows: 

1. More Data, More Dynamics

Including more demographics and more risk factors to put additional labels on the scatterplot and give different events on each click so users can decide which data to display. As well as animating the transitions for the locations of the circles, such as the range of the axes. Doing this for two risk factors for each axis. Or, for an extreme challenge, create three for each axis.

<img src="Images/7-animated-scatter.gif">



