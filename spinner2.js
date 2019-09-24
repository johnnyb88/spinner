const spinning = ['\r|', '\r/', '\r-', "\r\\",'\r|', '\r/', '\r-', "\r\\"];
let time = 0;
for (let i = 0; i < spinning.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinning[i]);
  }, time += 200);

}