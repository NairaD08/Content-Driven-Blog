# Content-Driven-Blog

## Description

This Content-Driven-Blog site allows users to create, manage, and interact with blog posts. Users can sign up, log in, create new posts, comment on existing posts, and manage their content through a user-friendly dashboard. The site is designed to provide a seamless experience for both readers and authors.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [User Guide](#user-guide)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Features

- **Homepage**: Displays existing blog posts with navigation links for the homepage and dashboard.
- **User Authentication**: Users can sign up, log in, and log out.
- **Dashboard**: Users can view, create, update, and delete their blog posts.
- **Comments**: Users can leave comments on blog posts.
- **Idle Timeout**: Users are prompted to log in again after a period of inactivity.

## Installation

To set up the Content-Driven-Blog site, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/NairaD08/Content-Driven-Blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Content-Driven-Blog
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables (if applicable) by creating a `.env` file in the root directory and adding any required configurations.

5. Start the application:

   ```bash
   npm start
   ```

## Usage

### First Visit

- When you visit the site for the first time, you will see the homepage, which includes existing blog posts (if any), navigation links for the homepage and dashboard, and the option to log in.

### Navigation

- Clicking on the **Homepage** option will take you back to the homepage.
- Clicking on any other navigation links will prompt you to either sign up or sign in.

### User Registration

- If you choose to sign up, you will be prompted to create a username and password.
- After clicking the **Sign Up** button, your credentials will be saved, and you will be logged into the site.

### User Login

- If you revisit the site and choose to sign in, you will be prompted to enter your username and password.
- Once signed in, you will see navigation links for the homepage, dashboard, and the option to log out.

### Blog Interaction

- Clicking on the homepage option will present you with existing blog posts, including the post title and date created.
- Clicking on an existing blog post will display the post title, contents, creator’s username, and date created, along with an option to leave a comment.
- After entering a comment and clicking the submit button while signed in, the comment will be saved and displayed with the comment creator’s username and date created.

### Dashboard Management

- Clicking on the **Dashboard** option will take you to your dashboard, where you can view any blog posts you have created and the option to add a new blog post.
- Clicking the button to add a new blog post will prompt you to enter both a title and contents for your post.
- After clicking the button to create a new blog post, the title and contents will be saved, and you will be taken back to an updated dashboard with your new post.
- Clicking on one of your existing posts in the dashboard will allow you to delete or update your post, and you will be taken back to an updated dashboard.

### Logging Out

- Clicking on the **Logout** option in the navigation will sign you out of the site.

### Idle Timeout

- If you are idle on the site for more than a set time, you will be able to view posts and comments but will be prompted to log in again before you can add, update, or delete posts.


## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## Questions

If you have any questions about the application, feel free to reach out:

- GitHub: [NairaD08](https://github.com/NairaD08)
- Email: [naira.davtyan08@gmail.com](mailto:naira.davtyan08@gmail.com)

---

This README provides a comprehensive overview of the Content Driven Blog site, detailing its features, installation, usage, and user interactions based on the specified acceptance criteria. By following the instructions, users can easily set up and navigate the blog site.