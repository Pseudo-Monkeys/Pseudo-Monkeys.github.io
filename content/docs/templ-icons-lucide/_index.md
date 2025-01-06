---
date: '2024-12-27T12:00:03+05:30'
draft: false
title: 'Introduction'
linkTitle: 'Templ-Icons-Lucide'
---

👋 Welcome to the **`templ-icons-lucide`** Go package documentation!

### templ-icons-lucide - use icons in templ to build HTML in GO

With a straightforward import, you can use the icons component in Go templ and modify it as needed.

- **Predefined Lucide Icons**: Access a wide range of icons from the Lucide icon set, directly within your Go temp components.
- **Easy Integration**: Incorporating icons into your Go web applications is as simple as adding a templ function call. No need to deal with external SVG files.
- **Flexible Customization**: Customize icon size, color, and other attributes easily using Go’s templ component functions.
- **Consistent Design**: Lucide provides a cohesive and visually appealing set of icons that enhance the overall user experience.


```go
import "github.com/Pseudo-Monkeys/templ-icons-lucide/lucide"
import "github.com/Pseudo-Monkeys/templ-icons-lucide/lib"

templ Demo(){
    @lucide.ChevronLeft(lib.IconProps{
        Size: "24",
    })
}
```

## Contribution
If you would like to contribute to the project, feel free to open issues or pull requests on GitHub. Whether it's adding new icons, improving documentation, or fixing bugs, contributions are welcome!

## License
`templ-icons-lucide` is open-source and available under the [ISC License](https://github.com/Pseudo-Monkeys/templ-icons-lucide/blob/main/LICENSE).


