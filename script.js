const fetchProducts = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  console.log("Order products fetch", data);
  const processingStatus = data.filter((products) =>
    products.status.includes("processing")
  );
  console.log(" Products that are in processing status", processingStatus);

  // Create a helper function calculateOrderTotal(order) that sums up (price * quantity) for all items in an order.
  const calculateOrderTotal = (order) => {
    return order.items.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,

      0
    );
  };

  console.log(calculateOrderTotal(data[0]));

  const ordersWithTotal = data.map((order) => ({
    ...order,
    total: calculateOrderTotal(order),
  }));
  console.log("Orders with total", ordersWithTotal);

  const sortedTotal = [...ordersWithTotal].sort((a, b) => b.total - a.total);
  console.log("Sorted Totals", sortedTotal);

  const highestTotalOrder = sortedTotal[0];
  console.log("Order with highest total", highestTotalOrder);
};
fetchProducts();

// Fetch the array of order objects.
// Map over all orders to create a new array that includes the total cost in each object, e.g.:
// {
//   orderId: 101,
//   customerName: "John Doe",
//   items: [...],
//   status: "shipped",
//   total: 1050.99 // computed
// }
// Filter for orders that are in "processing" status and log the result.
// Sort the orders by the computed total in descending order and log them.
// Find the order with the highest total and log the customer name + total.
