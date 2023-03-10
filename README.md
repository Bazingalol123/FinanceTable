# FinanceSummarizer
Welcome to the finance summarizer project. The project was created to help you visually summarize and analyze your financial data.
----
The need for this project (and also, the main use case it's aimed for) was raised during my weekly house economy summary process. I wanted to be able to visually display my data in a dynamic way (filtering, aggregating, etc.), without being tied to Excel/Google Sheets visualization tools. As a software developer with some basic experience in the data field (using Python and its amazing data tools), I found the code approach much more fun and intuitive for me over the Google Sheets approach. So I thought - if I have a Google Sheet with the same format which I fill every week and then just use this template every year, I can build a simple Flask web app which can parse this data and write my own custom visualization functions using Python's great library Plotly to create interactive plots!

Some plots you can find out-of-the-box include:
1. <ins>Expenses per Category (Pie)</ins> - A pie chart to summarize your expenses by category. You can multi-select categories to include/exclude from the pie calculation, and also select a month to display or just see the whole year summary!
2. <ins>Monthly Balance (Chart)</ins> - A stacked bar chart to view your expenses and incomes balance. You can use this chart to also see a bar chart of just the expenses or just the incomes!
3. <ins>Montly balance (Line)</ins> - Prefer to see your monthly balance on a timeline? this chart lets you do just that. Same as in the bar chart, here you can also select to display only the expenses or the incomes.
4. <ins>Expenses per Category (Bar)</ins> - Another way of displaying the expenses per category summary. This chart show the expenses for each category in a stacked bar for each month. This is helpful if for example you'd like to compare expense patterns between different months!
5. <ins>Expense Tracker (Line)</ins> - This chart lets you track the expenses for multiple (or a single) categories over time.

If you have basic experience in Python and Plotly, or you'd like to gain some hands on experience with it, all you have to do is:

1. Clone this repository
2. Create a folder named `finance_git` in your Google Drive
3. Import the `config.json` file (which can be found in the resources folder of this repository) into the folder created in step 2. This file will define some basic configurations for the web app to use. You'll need to fill the JSON fields according to the template file.
    > To get you ngrok auth token, go to https://dashboard.ngrok.com/get-started/your-authtoken
4. import the `Finance template.xlsx` file (which can be found in the resources folder of this repository) into your Google Drive. It will provide you a template sheet in the format the web app knows how to manipulate. A few important things to pay attention to (if you're not modifying the app's code):
    1. File name must match the format `Finance <YEAR>` for the app to be able to read it.
    2. You can add, remove or edit categories for the expenses or the incomes by simply adding/removing/editing the relevant column name.
5. Import the `FinanceSummarizer.ipynb` file (which can be found in the resources folder of this repository) into your Google Colab. You'll need it in order to run everything.
6. Run all cells of the notebook (you might need to approve access to your Google Drive from Google Colab). If you followed the steps correctly, you should see in the output of the last cell (named "Run") an ngrok link to the app. Follow the link to open the web app!
7. The current code contains some starter out-of-the-box plots. Of course you can (and should!) play with them, and add/remove plots to your needs. To do so, you should:
    1. Add the plotting function to the cell "Plot Functions"
    2. Add a route to display the plot in the "Application cell" (should be pretty straight forward to follow the code convention)

You can also customize the HTML, styles and app logic to suite your needs. The current code is pretty basic and worked for me for basic analysis of my data.
