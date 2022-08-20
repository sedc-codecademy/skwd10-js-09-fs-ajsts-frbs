1) Create a header component and use it in the app.

2.1) Create an order Interface. (id, items, amount, status, date, deliverer)

2.2) Create an order status Enum (PENDING, CANCELLED, COMPLETE)

3.1) Create an orders service

3.2) Implement methods for fetching all orders, and fetching a single order by ID

4.1) Create an order list component and have it print out all orders. (ID and status)

4.2) In the Order List component implement (click) listener. When clicking an order item, it's details should be
displayed in a new Order Details component.

4.3) The order details component should render all data about the selected order, and it should have buttons for cancel and complete.

4.4) The order details component should only display an order if an order was selected. Nothing else except a title should be printed.

5.1) The order date should be displayed in the mediumDate format.

5.2) The status of the order should be in uppercase

5.3) The amount of the order should have a currency sign

6.1) In the order details component add a (click) listener for the buttons.

6.2) In the orders service, implement a method that will be invoked when the method in the component is invoked. Update the status of the order accordingly.

