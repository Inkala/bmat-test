export const mockAPI = function() {
  const randWait = Math.random() * 2;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        JSON.parse(document.getElementById("fake_server_response")
        .textContent)
      );
    }, randWait);
  });
};
