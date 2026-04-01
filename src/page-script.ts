(function () {
  const el = document.getElementById("jv-json-data");
  if (!el) return;
  try {
    (window as any).data = JSON.parse(el.textContent || "");
    console.log(
      "%c[JSON Alexander]%c Data available as %cwindow.data",
      "color: #f0c674; font-weight: bold",
      "color: inherit",
      "color: #81a2be; font-weight: bold"
    );
  } catch {
    // silently fail
  }
})();
