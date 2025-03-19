# Live Chat Server

A real-time chat application that allows multiple users to join, send messages, and interact seamlessly. Built using **Node.js**, **Express**, and **Socket.io** for the backend, and **HTML**, **CSS**, and **JavaScript** for the frontend.

---

## 🚀 Features
- **Real-Time Messaging**: Instant communication using WebSocket technology.
- **User Join/Leave Notifications**: Get notified when users join or leave the chat.
- **Lightweight and Scalable**: Designed to handle multiple users efficiently.
- **Deployed Backend**: Hosted using **Vercel** for seamless integration.

---

## 🗂️ Project Structure
```
📁 LIVE-CHAT-SERVER
├── 📁 backend
│   ├── server.js           # Backend server code using Node.js and Socket.io
│   ├── package.json        # Project dependencies and scripts
│   └── README.md           # Instructions specific to the backend
├── 📁 frontend
│   ├── index.html          # Main HTML file for the chat UI
│   ├── client.js           # Frontend logic for Socket.io communication
│   ├── style.css           # Styles for the chat interface
│   └── README.md           # Instructions specific to the frontend
├── 📁 public               # Static files (if any)
└── README.md               # Main project README
```

---

## 🛠️ Installation

### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/mohit-kumar123/LIVE-CHAT-SERVER.git
   cd LIVE-CHAT-SERVER/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server locally:
   ```bash
   node server.js
   ```
4. Access the app locally at `http://localhost:8000`.

### Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Open `index.html` in your browser.

---

## 📈 Flowchart
Below is the flow of the application:

```plaintext
User 1 --> Frontend (HTML, CSS, JS)
      --> Sends message via Socket.io
      --> Backend (Node.js + Express)
      --> Broadcasts to other users
User 2 <-- Receives message via Socket.io
```

You can visualize this flow using tools like **draw.io** or **Lucidchart**. 

---

## 🌐 Deployment

### Frontend
Deployed on **GitHub Pages**:
- [Live Chat Frontend](https://mohit-kumar123.github.io/LIVE-CHAT-SERVER/)

### Backend
Deployed on **Vercel**:
- [Live Chat Backend](https://live-chat-server-murex.vercel.app/)

---

## ⚙️ Technologies Used
- **Backend**: Node.js, Express.js, Socket.io
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: GitHub Pages (Frontend), Vercel (Backend)

---

## 🔮 Future Improvements
- Add **private messaging** functionality.
- Implement **user authentication** for security.
- Integrate a **database** to store messages and chat history.
- Enhance UI/UX with modern frameworks like React.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
