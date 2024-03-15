# CONTRIBUTING.md

Check out the [Spanish version](./.github/CONTRIBUTING-ES.md) of this document.

## Welcome to 'Banco De La Peseta' 🏦

We are thrilled that you are interested in contributing to 'Banco De La Peseta', a project made by and for the community! This document is designed to guide you through the contribution process in a simple and transparent manner. It's important to mention that this project is developed with Ionic.

### First Steps 🚀

* **Familiarize yourself with the stack and project structure**: Review how the files and folders are organized to facilitate locating what you need and knowing where to add your changes.

* **Set up your development environment**: We use `npm`, the default package manager for Node.js. Make sure you have it installed on your system.

### How to Contribute 🛠

#### 1. Prepare Your Environment

- **Fork the repository**: Click on "Fork" at the top right of the GitHub page. This will allow you to work on your own copy of the project.
- **Clone your fork to your local machine**: Execute the command: `git clone <URL of your account's fork>` to clone the repository.
- **Add the original repository as a remote**: Execute the command: `git remote add upstream https://github.com/rayexbomx/bancodelapeseta-frontend.git`.
- **Switch to the `dev` branch**: Execute the command: `git checkout dev` to switch to the development branch.
- **Install the dependencies**: In the project directory, run `npm install`.

#### 2. Work on Your Changes

- **First and foremost, update your fork**: Synchronize your fork with the original repository (upstream). To do this, first make sure you are on the `dev` branch, execute the command: `git checkout dev && git fetch upstream` and then execute: `git merge upstream/dev` to merge the changes from the original repository into your local `dev` branch.

- **Create a new branch for your changes**: Execute the command: `git checkout -b <name-of-your-branch>` to start working. (For example, "git checkout -b feature/new-footer").

- **Develop and test your changes**: Implement your improvements and run `npm start` to test them on `http://localhost:4200`.

#### 3. Prevent Branch Conflicts

Before publishing your changes, it's crucial to re-sync your local 'dev' branch. This will ensure that your changes do not conflict with the changes of other contributors. Follow these steps to prevent conflicts:

* Make sure your branch is clean with `git status` and that you have no pending changes to commit.
* Switch to the dev branch with `git checkout dev`.
* Bring the latest changes from the original remote repository with `git pull upstream dev`.
* Switch back to your branch with `git checkout <name-of-your-branch>`.
* Update your branch with the changes you just brought in. Use: `git merge dev`.
* Resolve any conflicts that may arise. If you have doubts, do not hesitate to ask.
* Run `npm ci` and `npm run build`. There should be no errors.
* Take a final look at your changes with `npm start` and verify that everything is still working correctly.

#### 4. Submit Your Changes

- **Commit and push your changes**: Use clear and descriptive messages for your commits. Then, push to your fork with `git push origin <name-of-your-branch>`.
- **Create a Pull Request (PR)**: Clearly describe your changes and their importance in the PR.

### Best Practices 🌟

- **Check open issues and PRs** before starting your work to avoid duplications.
- **Keep your commits clean** and follow the project's code conventions.
- **Actively participate** in the discussions of your PRs to integrate feedback and suggestions.

### Need Help? 🆘

If you have doubts or need assistance, do not hesitate to open an issue in the repository. The community will be willing to help you.

Thank you for your interest in contributing to 'Banco De La Peseta'! Together, we are building something incredible. 🚀
