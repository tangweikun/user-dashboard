import dva from 'dva'
import createLoading from 'dva-loading'
import './index.css'

// 1. Initialize
const app = dva()
app.use(createLoading())
app.model(require('./models/users'))

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root');
