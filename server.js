const express = require('express');
const app = express();

app.use(express.json());

let earnings = 0; // Initialize earnings variable

app.get('/api/tap', (req, res) => {
  earnings += 1; // Increment earnings
  res.send(`You earned 1 point! Your total earnings are ${earnings} points.`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
