const expenseDataHardCoded = [
  {
    id: 1,
    date: "2024-01-15",
    item: "Zepto",
    description: "Grocery Shopping",
    category: "Food",
    amount: "$50.00",
  },
  {
    id: 2,
    date: "2024-01-16",
    item: "Rapido",
    description: "Ride from Sargasan to TCS",
    category: "Transport",
    amount: "$40.00",
  },
  {
    id: 3,
    date: "2024-01-17",
    item: "Amazon",
    description: "Book Purchase",
    category: "Education",
    amount: "$25.00",
  },
  {
    id: 4,
    date: "2024-01-18",
    item: "Netflix",
    description: "Monthly Subscription",
    category: "Entertainment",
    amount: "$15.99",
  },
  {
    id: 5,
    date: "2024-01-19",
    item: "Starbucks",
    description: "Coffee and Snacks",
    category: "Food",
    amount: "$12.50",
  },
  {
    id: 6,
    date: "2024-01-20",
    item: "Uber",
    description: "Ride to Airport",
    category: "Transport",
    amount: "$35.00",
  },
  {
    id: 7,
    date: "2024-01-21",
    item: "Walmart",
    description: "Household Items",
    category: "Household",
    amount: "$60.00",
  },
  {
    id: 8,
    date: "2024-01-22",
    item: "Gym",
    description: "Monthly Membership",
    category: "Health",
    amount: "$50.00",
  },
];

const STORAGE_KEY = "Yuvraj.ExpenseData";

function getExpenseData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function updateExpense(expenseData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenseData));
  // Reload the page to update the expense table in UI.
  window.location.reload();
  console.log("Updated!");
}

function addExpense(expenseObj) {
  const expenseData = getExpenseData();
  expenseData.push(expenseObj);
  updateExpense(expenseData);
  console.log(getExpenseData());
}

function updateexpenseTable() {
  const expenseData = getExpenseData();
  const table = document.getElementById("expenseTable");
  const tbody = document.createElement("tbody");

  // When expense table is empty
  if (expenseData.length == 0) {
    console.log("There are no expenses to display in table!");
    const row = document.createElement("tr");
    const noData = document.createElement("td");
    noData.innerText = "No expenses recorded yet.";
    noData.setAttribute("colspan", 6);
    row.appendChild(noData);
    tbody.appendChild(row);
    table.appendChild(tbody);
    return;
  }

  // let i = 1;
  expenseData.forEach((expense) => {
    const row = document.createElement("tr");
    const srNo = document.createElement("td");
    const date = document.createElement("td");
    const item = document.createElement("td");
    const description = document.createElement("td");
    const category = document.createElement("td");
    const amount = document.createElement("td");

    srNo.innerText = expense.id;
    date.innerText = expense.date;
    item.innerText = expense.item;
    description.innerText = expense.description;
    category.innerText = expense.category;
    amount.innerText = expense.amount;

    row.appendChild(srNo);
    tbody.appendChild(row);
    row.appendChild(date);
    tbody.appendChild(row);
    row.appendChild(item);
    tbody.appendChild(row);
    row.appendChild(description);
    tbody.appendChild(row);
    row.appendChild(category);
    tbody.appendChild(row);
    row.appendChild(amount);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
}

updateexpenseTable();
