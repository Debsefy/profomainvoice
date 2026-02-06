

function addRow() {
  const tbody = document.querySelector("#itemsTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input placeholder="Description of item/service"></td>
    <td><input type="number"></td>
    <td><input type="number"></td>
    <td>
      <span class="currency">$</span>
      <input type="number" class="amount" value="0" oninput="calculateTotals()">
    </td>
    <td class="remove" onclick="removeRow(this)">✕</td>
  `;
  tbody.appendChild(row);
  updateCurrency();
}

function removeRow(el) {
  el.parentElement.remove();
  calculateTotals();
}


function calculateTotals() {
  let subtotal = 0;
  document.querySelectorAll(".amount").forEach(a => {
    subtotal += Number(a.value || 0);
  });

  const tax = Number(document.getElementById("tax").value || 0);
  const discount = Number(document.getElementById("discount").value || 0);
  const shipping = Number(document.getElementById("shipping").value || 0);

  const total = subtotal + tax + shipping - discount;


  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}

function updateCurrency() {
  const symbol = document.getElementById("currency").value;
  document.querySelectorAll(".currency").forEach(c => c.innerText = symbol);
}
