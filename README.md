# 📝 Notes App

A simple and clean note-taking web application built with **Node.js**, **Express**, and **EJS**. This app allows you to **create**, **view**, **search**, and **delete** notes — all in an elegant interface.

---

## ⚙️ Tech Stack

- **Node.js** – Server runtime  
- **Express.js** – Web framework  
- **EJS** – HTML templating  
- **Vanilla CSS** – Page styling  
- **Nodemon** – Auto-restarts server in dev mode  

---

## 🚀 Features

- ✅ Create new notes with title & content  
- 🔍 Search notes by title  
- 📃 View full content of each note  
- 🗑 Delete notes  
- 🎨 Clean responsive UI  
- 🔧 In-memory storage (no database)

---

## 📁 Folder Structure

```
notes-app-exp/
├── public/
│   ├── notes.css              # Styles for notes list view
│   ├── singleNote.css         # Styles for single note view
│   └── style.css              # Shared/general styles
│
├── views/
│   ├── createNote.ejs         # Form to create a note
│   ├── errMessage.ejs         # Error display page
│   ├── index.ejs              # Optional: redirects or root view
│   ├── notes.ejs              # List & search all notes
│   └── singleNote.ejs         # Display individual note
│
├── db.mjs                     # In-memory data store
├── index.mjs                  # Main Express app and routes
├── package.json               # Project metadata & scripts
├── package-lock.json          # Dependency lock file
└── README.md                  # You're reading it now!
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/notes-app-exp.git
cd notes-app-exp
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm start
```

4. **Visit in browser**
```
http://localhost:3000/notes
```

---

## 📌 App Routes

| Method | Route                | Description                        |
|--------|----------------------|------------------------------------|
| GET    | `/notes`             | View all notes (and search)        |
| GET    | `/notes/:id`         | View a single note                 |
| GET    | `/createNote`        | Show form to create a note         |
| POST   | `/createNote`        | Save the new note                  |
| POST   | `/notes/:id/delete`  | Delete a specific note             |

---

## 🔒 Note on Storage

This app uses an **in-memory array** in `db.mjs` to store notes temporarily.  
Restarting the server will **clear all notes**.  

> For persistence, consider integrating a database like **MongoDB**, **SQLite**, or **PostgreSQL**.

---

## 🌱 Future Improvements

- [ ] Add persistent database support  
- [ ] Add edit/update functionality  
- [ ] Add user authentication  
- [ ] Improve mobile responsiveness  
- [ ] Support Markdown in notes  

---

## 👨‍💻 Author

**Hitesh**  
GitHub: [@hitesh-ctrl](https://github.com/hitesh-ctrl)

---

## 📄 License

This project is licensed under the **MIT License**.
