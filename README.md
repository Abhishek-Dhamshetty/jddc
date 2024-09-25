This is a simple e-commerce platform built with React and Bootstrap. It fetches product data from the Fake Store API and allows users to add products to a cart, adjust quantities, and calculate the total cost of the cart.

Features
Displays a list of products fetched from the Fake Store API.
Add items to the cart.
Increase or decrease the quantity of items in the cart.
Displays a summary of the cart, including:
Total MRP
Coupon Discount
Platform Fee
Shipping Charges
Final Total Amount
Bootstrap styling for responsiveness and simple UI.
Demo
<img src="./screenshot.png" alt="Screenshot of the application" style="max-width: 100%; height: auto;" />
Technologies Used
React: Frontend framework used to create the UI.
Bootstrap: CSS framework used for styling and responsive layout.
Fake Store API: API for fetching product data.
Installation and Setup Instructions
Prerequisites
Node.js (version 14.x or higher)
npm (version 6.x or higher)
Installation Process for a React Vite App
Install Node.js (if not already installed): Make sure you have Node.js installed on your machine. You can download it from here.

Verify the installation:

bash
Copy code
node -v
npm -v
Create a New React App using Vite: You can easily create a new React project using Vite with the following command:

bash
Copy code
npm create vite@latest
Set up Project: During the setup process, you will be prompted to enter a project name and choose a framework. Follow the prompts:

Project name: Choose your project name (e.g., ecommerce-platform).
Select a framework: Choose React.
Select a variant: Choose JavaScript or TypeScript (based on your preference).
Navigate into the project directory: After Vite sets up your project, move into the newly created folder:

bash
Copy code
cd ecommerce-platform
Install Dependencies: Install the necessary project dependencies by running:

bash
Copy code
npm install
Start the Development Server: To run the development server, use the following command:

bash
Copy code
npm run dev
This will start the Vite development server, and you can view the application at http://localhost:5173/ by default.

