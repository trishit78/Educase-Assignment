# PopX - User Account Management Application



## 📋 Overview

PopX is a modern web application built with React that provides a streamlined user account management system with a clean, responsive UI. The application features user registration, authentication, and profile management functionalities.

## ✨ Features

- **User Registration**: New users can create an account with full name, email, phone number, password, and company information
- **Authentication**: Secure login system for registered users
- **Profile Management**: Users can view and update their profile information
- **Responsive Design**: Built with mobile-first approach ensuring compatibility across devices
- **Modern UI/UX**: Clean and intuitive interface with smooth transitions and animations
- **Form Validation**: Client-side validation for all forms with real-time feedback

## 🛠️ Tech Stack

- **React** (v19) - Frontend library
- **React Router** (v7) - Navigation and routing
- **Tailwind CSS** (v4) - Utility-first CSS framework
- **Material UI** (v7) - React component library
- **Vite** (v6) - Build tool and development server

## 📦 Project Structure

```
educase-assignment/
├── public/               # Static files
├── src/
│   ├── assets/           # Images and other assets
│   ├── Components/       # React components
│   │   ├── Home.jsx      # Landing page
│   │   ├── Signin.jsx    # Login page
│   │   ├── Signup.jsx    # Registration page
│   │   └── Profile.jsx   # User profile page
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # CSS entry point
│   └── main.jsx          # Application entry point
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/educase-assignment.git
   cd educase-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📱 Application Flow

1. **Home Page** (`/`): Landing page with options to create an account or login
2. **Sign Up** (`/signup`): New user registration form
3. **Sign In** (`/signin`): User login form
4. **Profile** (`/profile`): User profile page (accessible after authentication)

## 🎨 UI Features

- **Floating Labels**: Form inputs with animated floating labels
- **Validation Feedback**: Real-time visual feedback for form validation
- **Profile Picture Upload**: Users can upload and update profile pictures
- **Animated Components**: Smooth transitions and subtle animations for better UX

## 🔧 Configuration

The application is configured with:
- ESLint for code quality
- Tailwind CSS for styling
- Vite for fast development and optimised builds
- Vercel configuration for seamless deployment


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


