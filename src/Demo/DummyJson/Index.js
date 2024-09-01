import React from 'react'
import './Style.css'
const Index = () => {
    return (
        <div>
            <header>
                <nav className="app-navbar">
                    <div className="nav-items-container">
                        <a href="/" className="logo-title">DummyJSON</a>
                        <ul className="nav-items">
                            <li><a href="/">Home</a></li>
                            <li><a href="/docs">Docs</a></li>
                            <li className="btn-container">
                                <a href="https://github.com/Ovi/DummyJSON" target="_blank" className="btn">
                                    <img src="https://assets.dummyjson.com/public/img/icons/github.svg" alt="Icon" />
                                    GitHub
                                </a>
                            </li>
                        </ul>
                        <span className="nav-burger-menu"><img src="https://assets.dummyjson.com/public/img/icons/bar.svg" alt="Nav Menu" /></span>
                    </div>
                </nav>
            </header>
             
  <nav className="docs-nav">
  <ul className="docs-menu">
    <li>
      <a href="/custom-response" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
        </svg>
        Custom Response
      </a>
    </li>

    <li>
      <a href="/docs" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
        </svg>
        Intro
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/#intro-test">
            Test
          </a>
        </li>

        <li>
          <a href="/docs/#intro-limit">
            Limiting Resources
          </a>
        </li>

        <li>
          <a href="/docs/#intro-delay">
            Delay Responses
          </a>
        </li>

        <li>
          <a href="/docs/#intro-auth">
            Resources as Auth User
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/image" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
        </svg>
        Dynamic Image
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/image/#image-square">
            Generate square image
          </a>
        </li>

        <li>
          <a href="/docs/image/#image-custom-size">
            Custom width / height
          </a>
        </li>

        <li>
          <a href="/docs/image/#image-custom-text">
            Custom text
          </a>
        </li>

        <li>
          <a href="/docs/image/#image-custom-color">
            Custom Custom Background and Text Color
          </a>
        </li>

        <li>
          <a href="/docs/image/#image-format">
            Different file formats
          </a>
        </li>

        <li>
          <a href="/docs/image/#image-font-family">
            Custom font family
          </a>
        </li>

        <li>
          <a href="/docs/image/#image-font-size">
            Custom font size
          </a>
        </li>

        <li>
          <a href="/docs/image/#image-identicon">
            Create identicon
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/auth" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
        </svg>
        Auth
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/auth/#auth-login">
            Login and get token
          </a>
        </li>

        <li>
          <a href="/docs/auth/#auth-me">
            Get auth user
          </a>
        </li>

        <li>
          <a href="/docs/auth/#auth-refresh">
            Refresh token
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/products" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
        </svg>
        Products
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/products/#products-all">
            Get all products
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-single">
            Get a single product
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-search">
            Search products
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-limit_skip">
            Limit & Skip products
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-sort">
            Sort products
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-categories">
            Get all products categories
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-category_list">
            Get products category list
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-category">
            Get products by category
          </a>
        </li>

        <li>
          <a href="/docs/products/#products-add">
            Add a product
          </a>
        </li>

        <li className="put">
          <a href="/docs/products/#products-update">
            Update a product
          </a>
        </li>

        <li className="delete">
          <a href="/docs/products/#products-delete">
            Delete a product
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/carts" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
        </svg>
        Carts
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/carts/#carts-all">
            Get all carts
          </a>
        </li>

        <li>
          <a href="/docs/carts/#carts-single">
            Get a single cart
          </a>
        </li>

        <li>
          <a href="/docs/carts/#carts-user">
            Get carts by user
          </a>
        </li>

        <li>
          <a href="/docs/carts/#carts-add">
            Add a cart
          </a>
        </li>

        <li className="put">
          <a href="/docs/carts/#carts-update">
            Update a cart
          </a>
        </li>

        <li className="delete">
          <a href="/docs/carts/#carts-delete">
            Delete a cart
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/recipes" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z" />
        </svg>
        Recipes
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/recipes/#recipes-all">
            Get all recipes
          </a>
        </li>

        <li>
          <a href="/docs/recipes/#recipes-single">
            Get a single recipe
          </a>
        </li>

        <li>
          <a href="/docs/recipes/#recipes-search">
            Search recipes
          </a>
        </li>

        <li>
          <a href="/docs/recipes/#recipes-limit_skip">
            Limit & Skip recipes
          </a>
        </li>

        <li>
          <a href="/docs/recipes/#recipes-sort">
            Sort recipes
          </a>
        </li>

        <li>
          <a href="/docs/recipes/#recipes-tags">
            Get all recipes tags
          </a>
        </li>

        <li>
          <a href="/docs/recipes/#recipes-tag">
            Get recipes by tag
          </a>
        </li>

        <li>
          <a href="/docs/recipes/#recipes-meal">
            Get recipes by meal
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/users" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        Users
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/users/#users-all">
            Get all users
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-login">
            Login user
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-me">
            Get auth user
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-single">
            Get a single user
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-search">
            Search users
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-filter">
            Filter users
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-limit_skip">
            Limit & Skip users
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-sort">
            Sort users
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-tags">
            Get all posts tags
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-tag_list">
            Get posts tag list
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-tag">
            Get posts by tag
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-carts">
            Get user's carts
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-posts">
            Get user's posts
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-todos">
            Get user's todos
          </a>
        </li>

        <li>
          <a href="/docs/users/#users-add">
            Add a user
          </a>
        </li>

        <li className="put">
          <a href="/docs/users/#users-update">
            Update a user
          </a>
        </li>

        <li className="delete">
          <a href="/docs/users/#users-delete">
            Delete a user
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/posts" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z" />
        </svg>
        Posts
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/posts/#posts-all">
            Get all posts
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-single">
            Get a single post
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-search">
            Search posts
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-limit_skip">
            Limit & Skip posts
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-sort">
            Sort posts
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-user">
            Get post by user id
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-comments">
            Get post's comments
          </a>
        </li>

        <li>
          <a href="/docs/posts/#posts-add">
            Add a post
          </a>
        </li>

        <li className="put">
          <a href="/docs/posts/#posts-update">
            Update a post
          </a>
        </li>

        <li className="delete">
          <a href="/docs/posts/#posts-delete">
            Delete a post
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/comments" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        </svg>
        Comments
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/comments/#comments-all">
            Get all comments
          </a>
        </li>

        <li>
          <a href="/docs/comments/#comments-single">
            Get a single comment
          </a>
        </li>

        <li>
          <a href="/docs/comments/#comments-limit_skip">
            Limit & Skip comments
          </a>
        </li>

        <li>
          <a href="/docs/comments/#comments-post">
            Get comment by post id
          </a>
        </li>

        <li className="comment">
          <a href="/docs/comments/#comments-add">
            Add a comment
          </a>
        </li>

        <li className="put">
          <a href="/docs/comments/#comments-update">
            Update a comment
          </a>
        </li>

        <li className="delete">
          <a href="/docs/comments/#comments-delete">
            Delete a comment
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/todos" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
        </svg>
        Todos
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/todos/#todos-all">
            Get all todos
          </a>
        </li>

        <li>
          <a href="/docs/todos/#todos-single">
            Get a single todo
          </a>
        </li>

        <li>
          <a href="/docs/todos/#todos-random">
            Get a random todo
          </a>
        </li>

        <li>
          <a href="/docs/todos/#todos-limit_skip">
            Limit & Skip todos
          </a>
        </li>

        <li className="todo">
          <a href="/docs/todos/#todos-add">
            Add a todo
          </a>
        </li>

        <li className="put">
          <a href="/docs/todos/#todos-update">
            Update a todo
          </a>
        </li>

        <li className="delete">
          <a href="/docs/todos/#todos-delete">
            Delete a todo
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/quotes" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1" />
        </svg>
        Quotes
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/quotes/#quotes-all">
            Get all quotes
          </a>
        </li>

        <li>
          <a href="/docs/quotes/#quotes-single">
            Get a single quote
          </a>
        </li>

        <li>
          <a href="/docs/quotes/#quotes-random">
            Get a random quote
          </a>
        </li>

        <li>
          <a href="/docs/quotes/#quotes-limit_skip">
            Limit & Skip quotes
          </a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/docs/http" className="parent-menu-item">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Mock HTTP
      </a>

      <ul className="child-menu">
        <li>
          <a href="/docs/http/#http-mock">
            Mock HTTP Response
          </a>
        </li>
        <li>
          <a href="/docs/http/#http-custom">
            Custom HTTP Response
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

  <section>
    <div className="content">
      <h1 className="docs-title">
        <img src="https://assets.dummyjson.com/public/img/icons/image.svg" className="icon" alt="svg icon" /> Image - Docs
      </h1>
      <p className="display-para">
        The <strong>image</strong> endpoint provides customizable placeholder images by specifying size in the URL, with options for background color, text color, and display text, ideal for use in websites and wireframes.
      </p>

      <div className="resource">
        <p className="res-tip">
          The base URL is: <strong><a href="https://dummyjson.com/image">dummyjson.com/image</a></strong>
        </p>
      </div>

      <div className="resource" id="image-square">
        <a href="#image-square" className="res-title">Generate square image</a>
        <pre><code className="language-js">
        {/* // https://dummyjson.com/image/SIZE
fetch('https://dummyjson.com/image/150')
.then(response => response.blob()) // Convert response to blob
.then(blob => {
  console.log('Fetched image blob:', blob);
})
// Blob {size: SIZE, type: 'image/png'} */}
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/image/150" alt="150x150" />
        </div>
      </div>

      <div className="resource" id="image-custom-size">
        <a href="#image-custom-size" className="res-title">Generate custom size image</a>
        <pre><code className="language-js">
         
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/image/200x100" alt="200x100" />
        </div>
      </div>

      <div className="resource" id="image-custom-text">
        <a href="#image-custom-text" className="res-title">Generate image with custom text</a>
        <pre><code className="language-js">
         
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter" alt="400x200" />
        </div>
      </div>

      <div className="resource" id="image-custom-color">
        <a href="#image-custom-color" className="res-title">Generate image with custom colors</a>
        <pre><code className="language-js">
        
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/image/400x200/282828" alt="400x200" />
        </div>
      </div>

      <div className="resource" id="image-format">
        <a href="#image-format" className="res-title">Generate image with different formats</a>
        <p className="res-tip">Supported Formats:
          <b>
            <a target="_blank" href="https://dummyjson.com/image/400x200?type=png">png</a>,
            <a target="_blank" href="https://dummyjson.com/image/400x200?type=jpg">jpeg</a>,
            <a target="_blank" href="https://dummyjson.com/image/400x200?type=webp">webp</a>
          </b>
        </p>
        <pre><code className="language-js">
        
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image" alt="400x200" />
        </div>
      </div>

      <div className="resource" id="image-font-family">
        <a href="#image-font-family" className="res-title">Generate image with custom font family</a>
        <p className="res-tip">
          Supported Fonts:
          <br />
          <b>
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=bitter">bitter</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=cairo">cairo</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=comfortaa">comfortaa</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=cookie">cookie</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=dosis">dosis</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=gotham">gotham</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=lobster">lobster</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=marhey">marhey</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=pacifico">pacifico</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=poppins">poppins</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=quicksand">quicksand</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=qwigley">qwigley</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=satisfy">satisfy</a>,
            <a target="_blank" href="https://dummyjson.com/image/250?text=Hello+Peter!&fontFamily=ubuntu">ubuntu</a>
          </b>
        </p>
        <pre><code className="language-js">
         
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=I+am+a+pacifico+font" alt="400x200" />
        </div>
      </div>

      <div className="resource" id="image-font-size">
        <a href="#image-font-size" className="res-title">Generate image with custom font size</a>
        <pre><code className="language-js">
          
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter!&fontSize=16" alt="400x200" />
        </div>
      </div>

      <div className="resource" id="image-identicon">
        <a href="#image-identicon" className="res-title">Generate identicon</a>
        <pre><code className="language-js">
         
        </code></pre>

        <div className="output-image">
          <h3>Output: </h3>
          <img loading="lazy" src="https://dummyjson.com/icon/abc123/150" alt="identicon" />
        </div>
      </div>
    </div>
  </section>


  <span className="social-links">
  <a href="https://github.com/Ovi/DummyJSON" target="_blank">
    <img src="https://assets.dummyjson.com/public/img/icons/github.svg" alt="Github"/>
  </a>
  <a href="https://x.com/DummyJSON" target="_blank">
    <img src="https://assets.dummyjson.com/public/img/icons/twitter_x.svg" alt="Github"/>
  </a>
  <a href="https://linkedin.com/company/DummyJSON" target="_blank">
    <img src="https://assets.dummyjson.com/public/img/icons/linkedin.svg" alt="Github"/>
  </a>
</span>
        </div>
    )
}

export default Index
