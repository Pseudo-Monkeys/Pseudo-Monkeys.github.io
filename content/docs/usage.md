+++
date = '2024-12-27T17:24:38+05:30'
draft = true
title = 'Usage'
weight = 2
+++

Here's a basic example of how to use the package within your Go templ:

```go {filename="demo.templ"}
import "github.com/Pseudo-Monkeys/templ-icons-lucide/lucide"
import "github.com/Pseudo-Monkeys/templ-icons-lucide/lib"

templ Demo(){
    @lucide.ChevronLeft(lib.IconProps{
        Size: "24",
    })
}
```

In the above example, the `lucide.ChevronLeft` function is used to render the "chevron-left" icon with customized size and color.
