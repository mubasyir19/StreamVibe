# Streamvibes

Design : Figma Community - [Pragadesh](https://www.figma.com/@praha)

Slicing design to code for learning frontend development.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Local Installation](#local-installation)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Login**: .
- **List Projects**: Show list projects based on priority.
- **Add Project**: Add new project.
- **List Tasks**: Show list tasks based on priority.
- **Add Task**: Add new task.

---

## Demo

You can see a live demo of this application here:

....

---

## Technologies Used

- **[Main Framework/Library]**: Next.js
- **[Styling]**: Tailwind CSS
- **[Routing]**: Next.js App Router
- **[Others]**: ESLint, Prettier

---

## Local Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mubasyir19/StreamVibe.git
    cd StreamVibe
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables (if any):**
    Create a `.env` file in the project root and add the necessary environment variables. Example:

    ```
    NEXT_PUBLIC_API_BERESIN=http://localhost:5000/api
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will run at `http://localhost:3000`

---

## Project Structure

├── public/
├── src/
│ ├── app/  
│ ├── components/  
│ ├── config/  
│ ├── helpers/  
│ ├── hooks/  
│ ├── services/  
│ ├── types/  
│ ├── hooks/  
│ ├── services/  
│ ├── types/  
├── .env  
├── .eslintrc.json
├── .gitignore  
├── package-lock.json
├── package.json
├── postcss.config.mjs  
├── README.md
├── tailwind.config.ts
├── tsconfig.json

---

## Deployment

This application can be easily deployed using platforms like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/).

**General steps:**

1.  Ensure you have an account on your chosen deployment platform.
2.  Connect your GitHub repository to the platform.
3.  Configure the build command (usually `npm run build` or `yarn build`) and the output directory (usually `build` or `dist`).
4.  Configure environment variables in the deployment platform settings.

---

## Contributing

We welcome contributions to this project! If you'd like to contribute, please follow these guidelines:

1.  Fork this repository.
2.  Create a new branch for your feature or bugfix (`git checkout -b feature/new-feature-name`).
3.  Make your changes.
4.  Ensure your code passes linting and tests.
5.  Commit your changes (`git commit -m 'feat: add new feature'`).
6.  Push to your branch (`git push origin feature/new-feature-name`).
7.  Open a Pull Request (PR) to the `main` branch of this repository.

Please adhere to our [Contribution Guidelines](CONTRIBUTING.md) (if any) and [Code of Conduct](CODE_OF_CONDUCT.md) (if any).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contact

If you have any questions or would like to get in touch:

- **Mahdy Mubasyir**: https://github.com/mubasyir19
- **Email**: m.mubasyir19@gmail.com
- **Website/Portfolio**: https://mahdy-mubasyir.vercel.app/
