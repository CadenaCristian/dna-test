import app from "./src/app";
import { firebaseConfig } from "./src/settings";
console.log(firebaseConfig);

const port = 4000;
app.listen(process.env.port || port, () => {
  console.log(`Server is running on port ${port}`);
});
