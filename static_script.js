function calcChips() {
    const price = parseFloat(document.getElementById('chipType').value);
    const weight = parseFloat(document.getElementById('chipWeight').value);
    const cost = parseFloat(document.getElementById('chipCost').value);
    const output = document.getElementById('chipResult');

    if (!weight || !price) {
        output.innerHTML = "<span style='color:red'>Enter weight</span>";
        return;
    }

    const total = weight * price;

    let html = `💻 Chip Value: <b>$${total.toFixed(2)}</b> at $${price}/lb`;

    if (cost && cost > 0) {
        const profit = (price - cost) * weight;
        const color = profit >= 0 ? "#0f0" : "#f00";

        html += `<br><span style="color:${color}">💰 Profit: $${profit.toFixed(2)}</span>`;
    }

    output.innerHTML = html;
}
