# How to Run the Project

This guide provides step-by-step instructions on how to clone the project repository from GitHub, install the required dependencies, and start the project using `npm`.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Git**: [Download Git](https://git-scm.com/)
- **Node.js** (version 16 or above): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js installation)

## Steps to Run the Project

### 1. Clone the Repository

Open your terminal or command prompt and run the following command to clone the project repository:

Replace `https://github.com/your-username/your-repository.git` with the actual URL of the GitHub repository.

Once cloned, navigate to the project directory:

```bash
cd .\dragndropfarros\
```
You will see a project structure like this.
```
└── 📁dragndropfarros
    └── 📁public
    └── 📁src
        └── App.css
        └── App.js
        └── App.test.js
        └── 📁components
            └── DragAndDropContainer.js
            └── DraggableItem.js
            └── DroppableArea.js
        └── data.js
        └── index.css
        └── index.js
        └── logo.svg
        └── reportWebVitals.js
        └── setupTests.js
        └── styles.css
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
    └── tailwind.config.js
```

### 2. Install Dependencies

Inside the project directory, run the following command to install all required dependencies:

```bash
npm install
```

This will install all the dependencies listed in the `package.json` file.

### 3. Start the Development Server

To start the project, use the following command:

```bash
npm start
```

This command will start the development server. You should see output indicating that the server is running, and a browser window will open automatically, pointing to:

```
http://localhost:3000
```

If the browser does not open automatically, you can manually navigate to the above URL.

### 4. Stop the Server

To stop the development server, press `Ctrl + C` in the terminal where the server is running.

## Troubleshooting

- **If `npm install` fails**: Ensure you have a stable internet connection and that your Node.js and npm versions are compatible.
- **If the development server doesn't start**: Verify there are no errors during `npm install` and that the `npm start` command is being run inside the project directory.

For additional issues, feel free to check the repository documentation or reach out to the repository maintainer.

---

With these steps, you should be able to run the project successfully. Happy coding!

