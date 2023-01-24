import app from "./application";
import sanitizedConfig from '../config'

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}`);
  console.log(process.env.SECRET);
  console.log(sanitizedConfig);
  
});
