# 🎵 Next.js Albums App

Welcome to the Next.js Albums App! This project is a modern web application that consumes a GraphQL API to list albums with search functionality. It leverages the power of Tailwind CSS, Shadcn UI, and Apollo Client to provide a seamless user experience.

## ✨ Features

- **Responsive Design:** Fully responsive and mobile-friendly layout.
- **GraphQL Integration:** Uses Apollo Client to fetch data from a GraphQL API.
- **Debounced Search:** Implements debounced search for optimal performance.
- **Modern UI:** Styled with Tailwind CSS and Shadcn UI components for a clean and attractive interface.

## 🛠 Technologies Used

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - React components for a better user interface
- [Apollo Client](https://www.apollographql.com/docs/react/) - A powerful GraphQL client for React
- [GraphQL Zero](https://graphqlzero.almansi.me/) - A free and simple GraphQL API

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/revanasiddeswara/Next-Js.git
    cd nextjs-albums
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. **Open your browser:**

    Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

Here is a brief overview of the project structure:
.
├── src
│   ├── app
│   │   ├── albums
│   │   │   ├── AlbumList.js
│   │   │   ├── page.js
│   │   │   └── style.css
│   │   ├── component
│   │   │   ├── container.js
│   │   │   ├── debounce.js
│   │   │   ├── layout.js
│   │   │   └── pagination.js
│   │   ├── lib
│   │   │   └── apolloClient.js
│   │   ├── pages
│   │   │   └── _app.js
│   │   ├── queries
│   │   │   └── album.js
│   │   ├── ui
│   │   │   ├── button.jsx
│   │   │   └── input.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   └── layout.js
│   ├── lib
│   │   └── util.js
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md


markdown
Copy code

- **`components/`**: Contains the React components used in the app.
- **`lib/`**: Contains the Apollo Client configuration.
- **`pages/`**: Contains the Next.js pages.
- **`styles/`**: Contains global styles.
- **`utils/`**: Contains utility functions (e.g., debounce).

## 🎨 Styling

This project uses Tailwind CSS for styling and Shadcn UI for pre-built React components, making it easy to maintain a consistent and modern design.

## 📦 API Integration

The app fetches data from the GraphQL Zero API using Apollo Client. The API provides various endpoints to fetch album data, which is displayed in the app.

## 🎉 Contribution

Contributions are welcome! Feel free to submit a pull request or open an issue if you have any ideas or improvements.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

If you have any questions or feedback, feel free to reach out:

- Email: your-email@example.com
- GitHub: K L M REVANASIDDESWARA SWAMY (https://github.com/revanasiddeswara/)

---

Made with ❤️ by K L M REVANASIDDESWARA SWAMY (https://github.com/revanasiddeswara/)