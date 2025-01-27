# Admin Panel Project

This is an Admin Panel project built with React, Vite, and Tailwind CSS. The project features a responsive layout with a sticky header, a fixed sidebar menu, and a footer. It utilizes React Router DOM for navigation between different pages.

## Project Structure

```
admin-panel
├── public
│   ├── index.html          # Main HTML file
├── src
│   ├── assets              # Static assets (images, fonts, etc.)
│   ├── components          # Reusable components
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Header.jsx      # Header component
│   │   ├── MenuPanel.jsx   # Sidebar menu component
│   ├── pages               # Page components
│   │   ├── Account.jsx     # Account management page
│   │   ├── Dashboard.jsx    # Main dashboard page
│   │   ├── PasswordChange.jsx # Password change page
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point for the React application
│   └── styles              # Styles directory
│       └── index.css       # Global styles including Tailwind CSS
├── package.json            # NPM configuration file
├── vite.config.js          # Vite configuration file
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd admin-panel
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Navigate through the application using the sidebar menu.
- Use the "Password Change" and "Account" buttons in the header for account management.
- The footer is fixed at the bottom of the page.

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router DOM

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.