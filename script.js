window.promises = [];
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => resolve(randomTime), randomTime * 1000);
  });
  promises.push(promise);
}

Promise.any(promises).then((result) => {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = `The first promise to resolve took ${result} seconds.`;
});
// Do not change the code above this
// add your promises to the array `promises`
