# Book List App

This is a simple React application that displays a list of books fetched from an API. It's built using React and Vite.

## Features

- Fetches and displays a list of books from an API
- Handles and displays errors if the API request fails
- Uses environment variables for API configuration

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 14.0 or later recommended)

## Installing and Running Book List App

To install and run the Book List App, follow these steps:

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory of the project and add the following line, replacing the URL with your API base URL:
   ```bash
   VITE_API_BASE_URL=http://your-api-base-url
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to `http://localhost:5173` (or the port shown in your terminal).
