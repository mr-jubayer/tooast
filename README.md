# Tooast

A simple, function-based toast notification library for JavaScript. Easily display non-blocking messages to your users.

## install

```bash
npm install tooast
```

**Usage:**

In your `app.js`, `App.jsx`:

```javascript
import Tooast from "tooast";

// Call the Tooast function when you want to display a notification
Tooast("Hello world!");

// You can also call it within event listeners or other asynchronous operations:
document.getElementById("myButton").addEventListener("click", () => {
  Tooast("Button clicked!");
});

fetch("/api/data")
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      Tooast("Data fetched successfully!", {
        bg: "lightgreen",
        shadow: "green",
      });
    } else {
      Tooast("Error fetching data.", { bg: "red", color: "white" });
    }
  });
```

| Property | Type   | Default     | Description                                         |
| -------- | ------ | ----------- | --------------------------------------------------- |
| `bg`     | string | `"white"`   | Background color of the toast (CSS color value).    |
| `shadow` | string | `"gray"`    | Color of the box shadow (CSS color value).          |
| `top`    | string | `"8px"`     | Distance from the top of the viewport (CSS unit).   |
| `right`  | string | `"50%"`     | Distance from the right of the viewport (CSS unit). |
| `border` | string | `"#dddddd"` | Border color of the toast (CSS color value).        |
| `color`  | string | `"black"`   | Text color of the toast message (CSS color value).  |
