# BecomePro

Welcome to the BecomePro project repository. BecomePro is a comprehensive platform designed for football players and enthusiasts to enhance their training, nutrition, mental toughness, and overall performance. Our mission is to provide valuable resources and support for football players at all levels.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
  - [Server Setup](#server-setup)
  - [Client Setup](#client-setup)
- [Usage](#usage)
- [Contributing](#contributing)
<!-- - [Host](#host) -->

## Features

- **User Authentication**
  - Registration and login functionality with form validation using Formik and Yup.
  - Authentication guards for protected routes.
- **Articles**
  - Create, edit, and delete articles with form validation.
  - Display a catalog of articles.
  - Detailed view of each article with like functionality.
- **Training Resources**
  - Articles covering gym routines, speed training, endurance building, and recovery techniques.
- **Nutrition**
  - Articles providing meal plans and dietary advice tailored for football players.
- **Mental Toughness**
  - Resources to build resilience, handle pressure, and maintain focus.
- **Responsive Design**
  - A user-friendly interface that adapts to different screen sizes.
- **Loading Spinners**
  - Loading indicators for data fetching operations to enhance user experience.
- **Toaster Notifications**
  - Informative toaster messages for actions like form submission, errors, and success notifications.
- **Confirmation Modals**
  - Confirmation dialogs for critical actions like article deletion.

## Technologies

- **Frontend**
  - React
  - React Router
  - Formik
  - Yup
  - Bootstrap
  - CSS Modules
- **Backend**
  - Node.js
  - Express
  - MongoDB (Mongoose)

## Installation

### Server Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/becomepro.git
   cd becomepro/server
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node server.js
   ```

### Client Setup

1. Navigate to the client directory:

   ```sh
   cd ../client
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the client:

   ```sh
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000`.

## Usage

- **Home Page**: Overview of the platform and latest articles.
- **Articles Catalog**: Browse all articles.
- **Article Details**: View detailed information about an article.
- **Create Article**: Authenticated users can create new articles.
- **Edit Article**: Authenticated users can edit their articles.
- **Delete Article**: Authenticated users can delete their articles.
- **Contact Us**: Contact form for users to send messages.
- **User Authentication**: Register and login to access more features.

## Contributing

We welcome contributions to enhance the BecomePro platform. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please make sure to update tests as appropriate.

<!-- ## Host -->
