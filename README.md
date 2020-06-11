## About

A [Deno](https://deno.land) serial course series from [Brad Traversy](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA).

Creating full REST API, and integrating with [postgress](https://www.postgresql.org) database.

## What is Deno

A **JavaScript /  Typscript runtime** based on the **V8** JavaScript engine and the **Rust** programming language.

What Deno features and benefits ?

- Use Typscript and JavaScript
- Secure by default
- De-centralized packages
- Standard library
- Modern JS
- ES modules
- Top level / first class await
- Built in testing
- Browser Compatible API
- Execute [WASM](https://webassembly.org) Binaries

### Deno Security Flags

The Secure by default in Deno is actually run in sand-box and actually to do it you can grant an access in every single
details.

```
--allow-write   : Allow Write access
--allow-read    : Allow Read system access
--allow-network : Allow Network access
--allow-env     : Allow Environment acess
--allow-plugin  : Allow loading plugin
--allow-hrtime  : Allow High resolution time measurement
--allow-run     : Allow Subprocesses
-A              : Alllow all permission
```

### De-Centralized Packages

Probably one biggest complain about NodeJS is the way of dependencies handled with NPM packages. If you want to use some
other packages you would install on NPM and will go on to your node_module/ and will install not only the package you
want it but all dependencies of the package, and will end up with thousand of folders in node_modules folder. Deno has
have different approach management.

If you want to use thrid-party packages you can actually imported right form the URL. What happen as soon as you import
third-party is cached to **hard drive** on load.

* No more NPM packages / packages.json
* Packages are impored froma URL - https:/deno.land/x
* Cached to hard drive on load

`import { Application } from "https://deno.land/x/oak/mod.ts"`

###  Standard Library
The core Deno standard module audited by Deno core team and guaranteed to work with Deno. some stuff you will find like:
- fs
- datetime
- http
- https
- etc

### Top Level / First Class Await

Normally with async-await you have to wrap you await inside async-function and you have to label async, but with Deno
actually can use await in global-scope without happing to wrap it in async function and it's really cool.

`import { serve } frm "https://deno/land/std/http/server.ts"`

### Browser Compatible API

You can use standard browser API like **[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)**,
**[Window object](https://developer.mozilla.org/en-US/docs/Web/API/Window)**


## Plugin
- [denon](https://deno.land/x/denon)
- [postgres](https://www.postgresql.org/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgment

@[Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
