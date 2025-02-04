# task
```md
# Assessment #5: E-Commerce Order Analyzers
 
## Goal
Fetch a small set of e-commerce orders. Perform calculations on totals, filter by statuses, and so on.
 
## JSON Data (save as `data.json`)
 
```json
[
  {
    "orderId": 101,
    "customerName": "John Doe",
    "items": [
      {
        "product": "Laptop",
        "price": 999.99,
        "quantity": 1
      },
      {
        "product": "Mouse",
        "price": 25.5,
        "quantity": 2
      }
    ],
    "status": "shipped"
  },
  {
    "orderId": 102,
    "customerName": "Jane Smith",
    "items": [
      {
        "product": "Headphones",
        "price": 75,
        "quantity": 1
      },
      {
        "product": "Monitor",
        "price": 150,
        "quantity": 2
      }
    ],
    "status": "processing"
  },
  {
    "orderId": 103,
    "customerName": "Sam Wilson",
    "items": [
      {
        "product": "Keyboard",
        "price": 45,
        "quantity": 1
      },
      {
        "product": "Speakers",
        "price": 60,
        "quantity": 1
      },
      {
        "product": "Webcam",
        "price": 85,
        "quantity": 1
      }
    ],
    "status": "delivered"
  },
  {
    "orderId": 104,
    "customerName": "Lisa Ray",
    "items": [
      {
        "product": "USB Cable",
        "price": 5,
        "quantity": 3
      },
      {
        "product": "Hard Drive",
        "price": 70,
        "quantity": 1
      }
    ],
    "status": "processing"
  }
]
```
 
## Instructions
 
1. Fetch the array of order objects.
2. Create a helper function `calculateOrderTotal(order)` that sums up (price * quantity) for all items in an order.
3. Map over all orders to create a new array that includes the total cost in each object, e.g.:
 
```js
{
  orderId: 101,
  customerName: "John Doe",
  items: [...],
  status: "shipped",
  total: 1050.99 // computed
}
```
 
4. Filter for orders that are in "processing" status and log the result.
5. Sort the orders by the computed total in descending order and log them.
6. Find the order with the highest total and log the customer name + total.
```