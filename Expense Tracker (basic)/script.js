// ===== Select Elements =====
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

// ===== Load Saved Expenses =====
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// ===== Show Expenses When Page Loads =====
window.addEventListener('DOMContentLoaded', () => {
    renderExpenses();
    updateTotal();
});

// ===== Add New Expense =====
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('expense-name').value.trim();
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const date = document.getElementById('expense-date').value;

    if (!name || isNaN(amount) || !date) return; // Avoid empty input

    const expense = {
        id: Date.now(), // unique ID
        name,
        amount,
        date
    };

    expenses.push(expense);
    saveExpenses();
    renderExpenses();
    updateTotal();

    expenseForm.reset();
});

// ===== Delete Expense =====
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    saveExpenses();
    renderExpenses();
    updateTotal();
}

// ===== Display Expenses =====
function renderExpenses() {
    expenseList.innerHTML = '';

    if (expenses.length === 0) {
        expenseList.innerHTML = `<li class="text-gray-500 text-center">No expenses yet</li>`;
        return;
    }

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm';

        li.innerHTML = `
      <span>${expense.name} - ₹${expense.amount} <small class="text-gray-500">(${expense.date})</small></span>
      <button onclick="deleteExpense(${expense.id})" 
              class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">X</button>
    `;

        expenseList.appendChild(li);
    });
}

// ===== Update Total =====
function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpense.textContent = `Total: ₹${total}`;
}

// ===== Save to localStorage =====
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}
