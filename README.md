# Vocalize Pro

Vocalize Pro is an AI-powered transcription tool that converts audio into text. This web-based solution provides an intuitive user interface to manage and visualize transcription data, offering chart displays and a seamless authentication system.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Features

- **AI Transcript**: Convert audio to text quickly and efficiently.
- **Charts**: Visual representation of data using Recharts and Shadcn UI.
- **Authentication**: Secure authentication using NextAuth.js.
- **Responsive Design**: Mobile-first design with Tailwind CSS.
- **Form Validation**: Zod for form schema validation.

## Tech Stack

- **Frontend**: Next.js, React
- **Styling**: Tailwind CSS, Shadcn UI
- **Charts**: Recharts, Shadcn UI
- **Validation**: Zod
- **Authentication**: NextAuth.js
- **Package Manager**: npm

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Nasif28/Vocalize-Pro.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Vocalize-Pro
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser to view the application.

## Usage

Once the development server is running, you can:

- View AI-generated transcripts.
- Authenticate using the NextAuth login system.
- View data visualizations and charts.

## Project Structure

```plaintext
├── components/       # UI components
├── pages/            # Next.js page routes
├── public/           # Public assets
├── styles/           # Global styles and Tailwind config
├── package.json      # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── README.md         # Project documentation
```

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add a feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

This README gives a comprehensive overview of your project. Let me know if you need any adjustments!
