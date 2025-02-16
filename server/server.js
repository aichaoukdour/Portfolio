const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  user: "postgres", // Remplacez par votre nom d'utilisateur PostgreSQL
  host: "localhost",
  database: "portfolio",
  password: "postgres1234", // Remplacez par votre mot de passe PostgreSQL
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Récupérer tous les projets depuis la base de données, y compris les images et descriptions
app.get("/projects", async (req, res) => {
  try {
    // Requête pour récupérer les données des projets
    const result = await pool.query("SELECT name, title, description, likes, image, github_link  FROM projects");

    // Formater les résultats pour s'assurer que l'image et la description sont présentes
    const projects = result.rows.map(project => ({
      ...project,
     
    }));

    // Afficher les projets dans la console avant de les renvoyer
    console.log("Données envoyées au frontend:", projects);

    res.json(projects); // Envoi des projets au frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Incrémenter les likes pour un projet
app.post("/projects/:name/like", async (req, res) => {
  const { name } = req.params;

  try {
    const result = await pool.query(
      "UPDATE projects SET likes = likes + 1 WHERE name = $1 RETURNING likes",
      [name]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ success: true, likes: result.rows[0].likes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update likes" });
  }
});





const nodemailer = require("nodemailer");



app.use(cors());
app.use(express.json());

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aichaoukdour02@gmail.com", // Remplace par ton email
    pass: "klqt wdfs glss axni", // Remplace par le mot de passe ou utilise un App Password
  },
});

// Route pour envoyer un email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "aichaoukdou02@gmail.com",
    subject: `Nouveau message de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email envoyé avec succès!" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    res.status(500).json({ success: false, error: "Erreur lors de l'envoi de l'email" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
