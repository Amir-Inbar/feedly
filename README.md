# Welcome to Feedly!

![image](https://github.com/user-attachments/assets/34a34e27-de91-489e-a0ca-8f3d5a691689)

### Feed UI Features

- **Infinite Scrolling:** Load the next 6 items as the user reaches the bottom of the feed with 1000ms debounce.
- **Feed Content:** Presenting post details
- **Like Button:**
    - Users can like/unlike posts.
    - The button icon updates based on the current state.
    - Total likes update when liked/unliked.
- **Impression Tracking:** Send a GET request every time a feed item is viewed.

--- 

### Technologies

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [react-fb-image-video-grid](https://www.npmjs.com/package/react-fb-image-video-grid)
- [Zustand](https://github.com/pmndrs/zustand)
- [Framer Motion](https://www.framer.com/motion/)
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component)
- [@Iconify React](https://github.com/iconify/react)
- [ESLint](https://eslint.org)

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Amir-Inbar/feedly.git
   ```

2. Access the project

   ```bash
   cd feedly

   ```

3. Install Frontend dependencies

   ```bash
    pnpm install

   ```

4. Create .env file with your VITE_API_HOST

   ```bash
    VITE_API_HOST=http://localhost:3000
   ```

5. Start the Frontend development server

   ```bash
   pnpm run dev

   ```

6. The Frontend will run on http://localhost:3000

## Authors

- [@Amir-Inbar](https://github.com/Amir-Inbar)
