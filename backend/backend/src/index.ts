const express = require('express');
import propertyRoutes from './routes/propertyRoutes';


const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/properties', propertyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
