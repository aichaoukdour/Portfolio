# Portfolio Repository

![Portfolio Banner](https://via.placeholder.com/1000x200?text=My+Portfolio) <!-- Replace this with your own banner if available -->

## 🌟 About the Project
This is my personal portfolio project built to showcase my skills, projects, and experiences. It includes dynamic project management with likes functionality, integration with PostgreSQL for data storage, and a responsive frontend to display my work visually.
<img width="397" alt="Screenshot 2025-01-24 131736" src="https://github.com/user-attachments/assets/e7c6923f-7a19-4b07-82f4-fd9d51bfb0db" />

### componenets
<img width="941" alt="Screenshot 2025-01-24 125609" src="https://github.com/user-attachments/assets/dc27fc9d-c52b-4a84-a00d-f88a308db9d7" />
<img width="940" alt="Screenshot 2025-01-24 125635" src="https://github.com/user-attachments/assets/1812c94d-3019-487a-86b1-f7a94523d4d3" />
<img width="936" alt="Screenshot 2025-01-24 125700" src="https://github.com/user-attachments/assets/b9962386-1292-4657-80c7-0d2a683f347c" />
<img width="928" alt="Screenshot 2025-01-24 125720" src="https://github.com/user-attachments/assets/822b10b4-b5de-4a2b-bac3-2af7db8f69bf" />
<img width="946" alt="Screenshot 2025-01-24 125741" src="https://github.com/user-attachments/assets/e3932e71-4066-409e-a61a-48e57fa9d3d0" />
<img width="922" alt="Screenshot 2025-01-24 125804" src="https://github.com/user-attachments/assets/1cc80481-1dae-415a-9565-580fb32a965f" />
<img width="943" alt="Screenshot 2025-01-24 125826" src="https://github.com/user-attachments/assets/1378c8f4-73ed-4a1d-9993-75f561414316" />

---

## 🚀 Features
- Dynamic project display with images, titles, descriptions, and like buttons.
- Real-time like updates stored in a PostgreSQL database.
- Backend API built using **Express.js** for managing project data.
- Fully responsive frontend for an optimal user experience across devices.
- Projects retrieved dynamically from the database.

---

## 🛠️ Technologies Used

### Frontend
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge) ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)

### Backend
![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge) ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)

### Database
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)

### Other Tools
![Visual Studio Code](https://img.shields.io/badge/-VS%20Code-007ACC?logo=visual-studio-code&logoColor=white&style=for-the-badge) ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=for-the-badge) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=for-the-badge)



---

## ⚙️ Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (configured with your credentials)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Set up the backend:
   ```bash
   cd backend
   npm install
   ```
4. Set up the PostgreSQL database with the provided schema.

5. Start the backend server:
   ```bash
   node server.js
   ```
6. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   npm start
   ```
7. Open your browser and visit `http://localhost:3000` to view the application.

---

## 📊 API Endpoints

### Get all projects
```http
GET /projects
```
- **Response:**
  ```json
  [
    {
      "name": "Project Name",
      "title": "Project Title",
      "description": "Project Description",
      "likes": 12,
      "image": "image-url.jpg"
    }
  ]
  ```

### Like a project
```http
POST /projects/:name/like
```
- **Response:**
  ```json
  {
    "success": true,
    "likes": 13
  }
  ```

---

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page) <!-- Replace this with a real screenshot -->

### Project List
![Project List](https://via.placeholder.com/800x400?text=Project+List) <!-- Replace this with a real screenshot -->

---



## 🤝 Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

---

## 📧 Contact
If you have any questions or suggestions, feel free to reach out to me:
- **Email:** aichaoukdour02@gmail.com
- **GitHub:** [@aichaoukdour](https://github.com/aichaoukdour)

---


