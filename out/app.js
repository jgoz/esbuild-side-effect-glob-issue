(() => {
  // packages/a/components/a.js
  function a() {
    console.log("a");
  }

  // packages/b/components/b.js
  function b() {
    console.log("b");
  }

  // app.js
  a();
  b();
})();
