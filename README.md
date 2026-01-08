# TextNode 📝

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-success?style=for-the-badge)](https://text-node.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://text-node.vercel.app)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white)

A modern note-taking and organization web application with a colorful design, built with HTML, CSS, and vanilla JavaScript.

---

## ✨ Features

* ✍️ **Create notes** with title, content, and category
* 🗑️ **Delete notes** with confirmation
* 🔍 **Real-time search** by title, content, or category
* 📥 **Download individual notes** as .TXT or .JSON
* 💾 **Auto-save** with localStorage
* 📊 **Statistics** for notes and categories
* 📱 **Fully responsive** design

---

## 🚀 How to Run

### Option 1: Directly in Browser

1. Open the `index.html` file with your browser
2. Done! The app is ready to use

### Option 2: With Local Server (Python)

```bash
cd ~/projects/textnode
python -m http.server 8000
```

Then open in your browser: `http://localhost:8000`

### Option 3: With Node.js (http-server)

```bash
npm install -g http-server
cd ~/projects/textnode
http-server
```

---

## 📁 Project Structure

```
textnode/
├── index.html      # Main HTML
├── styles.css      # CSS styles
├── script.js       # JavaScript logic
└── README.md       # This file
```

---

## 🎯 How to Use

### Create a Note

1. Write a **title** in the first field
2. Write the **content** in the textarea
3. (Optional) Add a **category**
4. Click **"Add Note"** or press `Ctrl + Enter`

### Download a Note

* After creating, a green banner will appear with download options
* Or click the download icons on each card:
  + 📄 Download as .TXT
  + 📥 Download as .JSON

### Search Notes

* Use the search bar at the top to filter by:
  + Title
  + Content
  + Category

### Edit a Note

* Click the pencil icon ✏️
* The note will load into the form
* Modify the data and create again

### Download All

* Go to the "Download All" section at the bottom
* Download all your notes as:
  + A single .TXT file
  + A .JSON file with metadata

---

## 💾 Storage

Data is automatically saved in the browser's **localStorage**, which means:

* ✅ Your notes persist when you reload the page
* ✅ No backend server needed
* ⚠️ Data is saved only in this browser/device

---

## 🛠️ Technologies

* **HTML5** - Semantic structure
* **CSS3** - Glassmorphism, gradients, and animations
* **Vanilla JavaScript** - No frameworks
* **FontAwesome 6** - Icons

---

## 🎨 Design

* **Dark theme** with purple and blue gradients
* **Glassmorphism** with transparent glass effect
* **Professional dark theme** perfect for long sessions
* **Smooth animations** for better UX

---

## 📝 Note Example

```
Title: Project Ideas
Category: Work
Content: 
- Implement advanced search
- Add multiple tags
- Design settings page
```

---

## ✅ Requirements

* A modern browser (Chrome, Firefox, Safari, Edge)
* JavaScript enabled
* Nothing else! No external dependencies

---

## 📄 License

MIT - Free to use and modify

---

## 🤝 Contributions

Suggestions and improvements are welcome!

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🔮 Future Roadmap

- [ ] Multiple tags per note
- [ ] Advanced search filters
- [ ] Dark/Light theme toggle
- [ ] Export to PDF
- [ ] Cloud sync (optional)
- [ ] Note templates
- [ ] Rich text editor

---

## 👨‍💻 Author

**Alexander Ross**
- GitHub: [@alexrosstrabajo-design](https://github.com/alexrosstrabajo-design)
- Portfolio: [pagina-wheat.vercel.app](https://pagina-wheat.vercel.app)

---

**Enjoy organizing your thoughts with TextNode** 🎉
