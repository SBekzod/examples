const cluster = require("cluster");
const instaceCPUs = require("os").cpus();

if (cluster.isMaster) {
  console.log(`MASTER thread via process id => ${process.pid}`);

  instaceCPUs.map((ele) => {
    cluster.fork();
  });
} else {
  console.log(`WORKER thread via process id => ${process.pid}`);
}
