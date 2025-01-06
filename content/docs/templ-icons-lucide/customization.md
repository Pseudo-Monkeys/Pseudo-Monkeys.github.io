---
date: '2024-12-27T17:31:15+05:30'
draft: false
title: 'Customization'
weight: 3
---

You can customize the rendering of icons directly in your templ components file. Available customization options include:

- **Size**: Set the size of the icon (e.g., `"24px"`, `"2rem"`, etc.).
- **Fill**: Fill the color in the icon (e.g., `"red"`, `"blue"`, `"#ff0000"`, etc.).
- **Additional SVG Attributes**: You can pass additional attributes like `class`, `stroke`, etc.

For example:

```go 
    @lucide.ChevronLeft(lib.IconProps{
        Size: "24",
        Fill: "red",
        Class: "lucide-chevron",
    })
```

This will render the `chevron-left` icon with a size of `24px` and color `red`.

