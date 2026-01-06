### Project for revisioning next js 16

### Node destails

node v25.2.1 | npm v11.6.2

# Day 1: Routing

https://nextjs.org/docs/app/getting-started/layouts-and-pages

### dynamic route can be use [userID] something like this

then we should use async for server components and params

# Day 2: Params and Search Params

https://nextjs.org/docs/app/api-reference/file-conventions/default#params-optional

params are values taken from the URL path that come from dynamic folder names in the App Router.

```
/shop/electronics/iphone

params = {
  category: "electronics",
  product: "iphone"
}

📌 Created by folders like [category], [product]
📌 Used for required route data
```

searchParams are values taken from the URL query string (the part after ?).

```
/shop?category=electronics&color=black

<Link
    href={{
        pathname: `/blog/${id}/comments`,
        query: {
            ref: "blogDetails",
            userID: "11122112",
            email: "testing email",
        },
    }}
        className="text-blue-500 underline hover:text-white"
    >
        Read Comments
</Link>


searchParams = {
  category: "electronics",
  color: "black"
}

📌 Written after ? in the URL
📌 Used for optional data like filters, sorting, pagination

```

# [Dynamic Route](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#convention) + [Optional Catch All Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#catch-all-segments)

### Dynamic Route
```
app/blog/[slug]/page.js

/blog/react
/blog/nextjs

params = { slug: "react" } it could be params = { slug: "nextjs" }

Dynamic routes allow one page to handle many URLs using changing path values.
```

### Cath All Segments
```
app/docs/[...slug]/page.js

/docs/intro
/docs/intro/setup
/docs/intro/setup/install

params = {
  slug: ["intro", "setup", "install"]
}

📌 At least ONE segment is required
```

### Optional Cath All Segments
```
Optional catch-all segments match zero or more URL parts.

app/docs/[[...slug]]/page.js


/docs
/docs/intro
/docs/intro/setup

params = {
  slug: undefined // when no segment or we are on "docs" route
}
// or
params = {
  slug: ["intro"]
}



📌 Segments are optional if user dont use any segment then page component will render 
```


📝 One-Line Notes

[...slug] → must exist
[[...slug]] → may exist or not




