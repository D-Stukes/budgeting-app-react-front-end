Other Features I want to add:
    search any field
    advance search - by multiple fields- date range, keyword, amount
    sort
    group by category, month
    add a login
Category drop down list  - which project has this example? (I forgot, couldn't find it)
<label for="category">Choose a category:</label>

<select name="categorylist" id="categorylist">
  <option value="utilities">Utilities</option>
  <option value="expenses">Expenses</option>
  <option value="groceries">Groceries</option>
  <option value="Other Bills">Other Bills</option>
</select>

Questions:
    Why doesn't all data display?
    I need a reminder of how to add a Select drop down list in React
    (searched previous projects - it is in there, just didn't find it)


Errors/Problems:
    I'm getting the following error in the console, even after removing outer div
    "react-dom.development.js:86 Warning: validateDOMNesting(...): <tr> cannot appear as a child of <div>.
        at tr
        at Transactions (http://localhost:3000/static/js/bundle.js:1134:90)
        at div
        at TransactionsIndex
        at RenderedRoute (http://localhost:3000/static/js/bundle.js:40023:5)
        at Routes (http://localhost:3000/static/js/bundle.js:40460:5)
        at main
        at Router (http://localhost:3000/static/js/bundle.js:40398:15)
        at BrowserRouter (http://localhost:3000/static/js/bundle.js:38715:5)
        at div
        at App"
