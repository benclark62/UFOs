# UFOs
Module 11

## Overview 
This project was intended to reproduce data from a large dataset (data.js) in a filterable, easy-to-read format.  A single table would have produced hundreds of entries for a user to scroll through.  With the addition of multiple filters for each list element (date, city, state, country, shape), users can quickly filter the dataset and view the relevant entries.

## Results
Each entry follows the same structure, containing seven list elements.  The first five (datetime, city, state, country, shape) have values that have been consistently formatted, making filtering easier.  durationMinutes and comments do not have consistent formats and would require additional clean-up to make them easily filterarble.

![data_structure.png](https://github.com/benclark62/UFOs/blob/main/resources/data.png)

#### State Filter Example
With the five filters in place, a user will manually key in the data on which they would like the table to focus.  In the first example, a user would like to see all entries from California.  Entering “ca” into the “Enter State” field and hitting “enter” executes the filter.  By having the DevTools Console open, we can see that the key:value pair of “state:ca” was logged and the table was filtered to 30 entries.

![ca_filter.png](https://github.com/benclark62/UFOs/blob/main/resources/ca_filter.png)

#### State and Date Filter Example
If this user was only interested in researching California entries from a specific date, the user would then update the “Enter Date” filter.  In this example, the user was only interested in January 9, 2010.  In the Console, you can see that both the datetime (“1/9/2010”) and state (“ca”) filters are applied, leaving only two entries in the table.

![ca__date_filter.png](https://github.com/benclark62/UFOs/blob/main/resources/ca_date_filter.png)

## Summary
The current functionality built into this site, while useful, could be significantly improved with minor adjustments to the code.  The biggest drawback is the lack of intuitive next steps for updating the filter after entering the data.

-	Adding a button for “Update Filter” will make it easy for users to understand how to apply the filter once data has been entered.  Currently relying on a user to hit “tab” or “enter” has the potential for some confusion.  A less sophisticated solution would be to add text instructing the user to hit “enter” after the submission. 
-	Adding a “Clear Filter” button will make it much easier for users to clear the filter, a step required to conduct a new search.  Currently, users are required to refresh the entire page.  

Additional developments could include adding filters for duration, keyword searches in the comments, and colors based on inclusion in comments.  
