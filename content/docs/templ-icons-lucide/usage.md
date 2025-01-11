---
date: '2024-12-27T17:24:38+05:30'
draft: false
title: 'Usage'
weight: 2
---

### Setup project

Create a new directory containing our project:
```bash
mkdir project-name
```

Initialize a new Go project within it.
```bash
cd project-name
go mod init github.com/project-name
go get github.com/a-h/templ
go get github.com/Pseudo-Monkeys/templ-icons-lucide
```

### Create a templ file and use templ-icons-lucide
Create a `hello.templ` file containing a component.

Components are functions that contain templ elements, markup, and if, switch, and for Go expressions.

```go{filename="hello.templ"}
package main

import "github.com/Pseudo-Monkeys/templ-icons-lucide/lucide"
import "github.com/Pseudo-Monkeys/templ-icons-lucide/lib"

templ hello(name string) {
	<div>
        Hello, {name} 
        @lucide.ChevronLeft(lib.IconProps{
            Size: "24",
        })
    </div>
}
```

In the above example, the `lucide.ChevronLeft` component is used to render the "chevron-left" icon with customized size and color.

To learn more about Go templ use [Templ](https://templ.guide) documentation
