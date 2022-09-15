1. Create two services. Auth service and Loan Service.

2. The Auth service needs to have methods for register, login and logout. It also needs to keep the current user state. For the current user state data type, use an interface called User, and it will have the email of the user.

3. The Loan service needs to have methods for:
- Create new loan
- Get loan by ID
- Get all loans
- Update Loan Status

The loan interface needs to have the following properties:
- id
- user (Name of the person who applied for the loan)
- amount
- interest rate
- request date
- approval date
- status (Separate enum for this, OPEN -> SENT_FOR_APPROVAL -> APPROVED)

4. Create two feature modules, Auth and Loan Service

5. The Auth module has the following components:
- login page (Containing a form for signing in) email/password
- register page. (Containing a form for registering) email/username/password

6. The Loan module has the following components:
- Loan List Page (Showing a list of all loans) 
> Show only User, amount and status in this list. You can use either cards or a table.
> Add a dynamic class to each item in the list based on the loan status. Style accordingly.

- Loan Details Page (Separate page for a single loan)
> Navigate to this page when clicking on the appropriate loan in the list
> Render amount with a EUR sign, render the user name in uppercase, render the dates in this format (Sep 15, 2022, 9:03:01 AM)
> This page needs to render a [Send for approval] button if the status of the loan is NEW.
> Render an [Approve] button if the status of the loan is SENT_FOR_APPROVAL
> Don't render any buttons if the loan is approved.

- New Loan Page (Containing a form to create a new loan)

7. Setup routing with lazy loading towards the two modules
> 
> 8. Create a header component directly  root level. Add navigation to it. If the user is logged in, show navigation
> options for Loan List, Add Loan, Logout.
> If the user is not logged in, show options for Login, Register
> 
> 9. Add a guard so that the user cannot navigate to the Loan module routes if he's not logged in.