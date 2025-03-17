const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/index");

// ตั้งค่า EJS เป็น View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ใช้ Routes ที่แยกไว้
app.use("/", routes);

// เปิดเซิร์ฟเวอร์ที่ port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
