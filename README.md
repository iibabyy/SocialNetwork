# Social Network Application

A modern social networking platform built with Next.js, React, and MongoDB.

## Overview

This application is a full-featured social network that allows users to connect, share content, and interact with each other. It provides a Twitter-like experience with a clean, responsive interface.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB instance
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iibabyy/SocialNetwork.git
cd SocialNetwork
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Add your mongodb connection string to the `.env` file:
```
DATABASE_URL=your_mongodb_connection_string
```

4. Initialize Prisma:
```bash
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to start using the application.

## Technical Stack

- **Frontend**: React, Next.js
- **Backend**: Next.js API routes
- **Database**: MongoDB with Prisma ORM
- **Authentication**: Custom authentication system
- **Styling**: Tailwind CSS

## Project Structure

- `/components`: React components
- `/pages`: Next.js page components and API routes
- `/prisma`: Database schema and configuration
- `/libs`: Utility functions and services
- `/public`: Static assets

## Features

### User Management
- **User Authentication**: Secure login and registration system
- **Profile Customization**: Users can update their name, bio, profile image, and cover image
- **Follow System**: Users can follow/unfollow each other to create a personalized network

### Content Sharing
- **Post Creation**: Users can create text posts with the "What's happening?" form
- **Media Support**: Posts can include media content (images/videos)
- **Post Feed**: View a chronological feed of posts from all users or filtered by username

### Social Interactions
- **Likes**: Users can like/unlike posts
- **Reposts**: Users can repost content to their followers
- **Comments**: Users can comment on posts to start conversations
- **Notifications**: Real-time notification system for social interactions

### UI Features
- **Responsive Design**: Optimized for various screen sizes
- **Dark Mode**: Modern dark-themed interface
- **Intuitive Navigation**: Easy-to-use layout for seamless experience
