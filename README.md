# VidVerse

## Overview
VidVerse is a web application that provides a platform for users to share and discover short videos. Inspired by TikTok, VidVerse offers a similar user experience, allowing users to upload, like, comment, and explore videos created by others. The application is built using Next.js with TypeScript and leverages various technologies for backend data storage and user authentication.

## Features
- **User Authentication**: VidVerse utilizes Google Auth to provide a seamless login and signup experience for both new and existing users.
- **Responsive Design**: The application is designed to be responsive, adapting to different screen sizes and providing an optimal viewing experience across devices.
- **Video Upload**: Users can effortlessly upload their own videos to share with the VidVerse community. The upload process is streamlined and user-friendly.
- **Interactions**: Users can like/unlike videos and leave comments, fostering engagement and interaction within the community.
- **User Profiles**: Each user has a dedicated profile page where others can explore the videos they have uploaded and liked.
- **Categorized Posts**: VidVerse organizes videos into various categories, allowing users to browse specific content genres and discover new videos of interest.
- **Search Functionality**: The application features a convenient search bar that simultaneously searches through video captions and user profiles, making it easy for users to find relevant content.

## Tech Stack
- **Frontend**: The frontend of VidVerse is built using Next.js, a popular React framework, and incorporates TypeScript for improved type safety and development efficiency.
- **Backend**: For data storage, VidVerse employs Sanity, a flexible and customizable headless CMS (Content Management System).
- **State Management**: The application utilizes Zustand, a lightweight state management library, to persistently store user data.
- **Authentication**: VidVerse integrates Google Auth for secure and reliable user authentication.

## Setup and Usage
To access and use VidVerse, you can visit the deployed application at https://vid-verse-lmmk.vercel.app/.

To set up and run VidVerse on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/vidverse.git
   ```

2. Install dependencies:
   ```
   cd vidverse
   npm install
   ```

3. Configure environment variables:
   - Create a `.env.development` file in the root directory.
   - Add the necessary environment variables, such as API keys and configuration details, to the file.

4. Start the development server:
   ```
   npm run dev
   ```

5. Access VidVerse in your browser at `http://localhost:3000`.

## Contributing
Contributions to VidVerse are welcome! If you'd like to contribute to the project, please follow these guidelines:
- Fork the repository and create a new branch for your feature or bug fix.
- Commit your changes with descriptive commit messages.
- Push your branch to your forked repository.
- Open a pull request, explaining the purpose and changes of your contribution.


## Contact
If you have any questions or suggestions regarding VidVerse, feel free to reach out to us at shubhjhawar78@gmail.com.

Thank you for using VidVerse! We hope you enjoy your video-sharing experience.
