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
- [License](#license)

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

Follow these steps to set up the project on your local machine.

### Server Setup

1. Clone the repository:

```sh
git clone https://github.com/your-username/becomepro.git
cd becomepro/server
