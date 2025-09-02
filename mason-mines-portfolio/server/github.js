import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";   // <- import cors

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://masonmines2006.github.io/",  // replace with your deployed frontend URL
  "http://localhost:5173"      // keep local dev
];

// Allow requests from your frontend (or * for all)
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  }
}));

app.get("/github", async (req, res) => {
  const { year, username } = req.query;
  const token = process.env.GITHUB_TOKEN;

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const ghRes = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await ghRes.json();

  if (!data.data?.user) return res.status(400).json({ error: "User not found" });

  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  const days = weeks.flatMap((week) => week.contributionDays);

  res.json(days);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
