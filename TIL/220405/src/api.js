export function request(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (event) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      }
    });
    xhr.addEventListener("error", (event) => reject(xhr.statusText));

    xhr.open("GET", url);
    xhr.send();
  });
}
