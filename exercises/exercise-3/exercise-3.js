let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(array) {
  let total = 0;
  console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL".padEnd(5));
  array.forEach((food) => {
    const { itemName, quantity, unitPrice } = food;
    total += unitPrice * quantity;
    console.log(
      `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${(
        unitPrice * quantity
      )
        .toFixed(2)
        .toString()
        .padEnd(5)}`
    );
  });
  console.log(`\nTotal: ${total}`);
}

printReceipt(order);
