import './load-env'; // Must be the first import
import app from './server';
import logger from './config/logger';
import { dbService } from './modules/database';
import { migrate } from './config/constants';

// Start the server
const port = Number(process.env.PORT || 3000);

// 서버 중단시키기
const stopServer = async (server, signal) => {
  logger.info(`Stopping server with signal: ${signal}`);
  await server.close();
  process.exit();
};

const server = app.listen(port, () => {
  logger.info('Express server started on port: ' + port);
});

// DB 연결
try {
  dbService(migrate).start();
} catch (e) {
  stopServer(server, `db is failed to start: ${e}`);
}
