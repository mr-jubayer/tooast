function Tooast(content, options = {}) {
  const {
    bg = "white",
    shadow = "gray",
    top = "8px",
    right = "50%",
    border = "#dddddd",
  } = options;

  const toast = document.createElement("div");
  toast.style.position = "absolute";
  toast.style.top = top;
  toast.style.right = right;
  toast.style.transform = "translateX(50%)";
  toast.style.boxShadow = `0 0 10px ${shadow}`;
  toast.style.border = `1px solid ${border}`;
  toast.style.padding = "20px";
  toast.style.borderRadius = "5px";
  toast.style.backgroundColor = bg;
  toast.style.zIndex = "1000";

  toast.innerText = content;

  const close = document.createElement("p");
  close.innerText = "Close";
  close.style.position = "absolute";
  close.style.right = "-30px";
  close.style.top = "2px";
  close.style.backgroundColor = "black";
  close.style.borderRadius = "3px";
  close.style.padding = "3px";
  close.style.color = "white";
  close.style.cursor = "pointer";

  close.addEventListener("click", () => {
    document.body.removeChild(toast);
  });

  toast.appendChild(close);

  document.body.appendChild(toast);
}

export default Tooast;
