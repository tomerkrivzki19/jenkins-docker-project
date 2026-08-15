const express = require("express");
const { randomGreets } = require("./greets");

const app = express();

// בדיקת תקינות השרת
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ברכה רנדומלית בכל רענון
app.get("/api/greets", (req, res) => {
  res.json({ greets: randomGreets() });
});

// עמוד של הברכות
app.get("/", (req, res) => {
  const greet = randomGreets();

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Greets Factory</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      background: linear-gradient(135deg, #667eea, #764ba2);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      background: white;
      width: 90%;
      max-width: 500px;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    }

    .cookie {
      font-size: 70px;
      margin-bottom: 20px;
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
      color: #555;
      margin-bottom: 30px;
      line-height: 1.6;
      min-height: 60px;
    }

    button {
      background: #667eea;
      color: white;
      border: none;
      padding: 14px 28px;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.2s;
    }

    button:hover {
      background: #5a67d8;
      transform: translateY(-2px);
    }
  </style>
</head>

<body>
  <div class="card">
    <div class="cookie">🍪</div>

    <h1>Greets Factory</h1>

    <p>${greet}</p>

    <button onclick="location.reload()">
      More Greeting
    </button>
  </div>
</body>
</html>
  `);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
