# MERN-Stack-Front-To-Back

[Udemy] MERN Stack Front To Back: Full Stack React, Redux &amp; Node.js [2018, ENG]

**Original src:**  
https://github.com/bradtraversy/devconnector

<br/>
<hr/>
<br/>

## 01 Introduction

**Visual Studio Code Settings:**

    {
        "editor.fontSize": 26,
        "editor.tabSize": 2,
        "editor.wordWrap": "on",
        "terminal.integrated.fontSize": 26,
        "emmet.includeLanguages": {
            "javascript": "javascriptreact"
        },
        "emmet.syntaxProfiles": {
            "javascript": "jsx"
        },
        "editor.formatOnSave": true
    }

<br/>

**Plugins:**

* ES7 React/Redux/React-Native/JS snippets
* Bracket Pair Colorizer
* Prettier formatter for Visual Studio Code
* Live Server
* Node.js Modules Intellisense

<br/>

## 02 Basic Express Setup

<br/>

### 005 MongoDB Setup With mLab

<br/>

### 006 Install Dependencies Basic Server Setup

    $ cd /project/
    $ npm init -y

    $ npm install --save express mongoose passport passport-jwt jsonwebtoken body-parser bcryptjs validator

    $ npm install --save-dev nodemon

    $ npm run server

<br/>

### 007 Connecting To MongoDB With Mongoose

<br/>

### 008 Route Files With Express Router

<br/>

## 03 User API Routes JWT Authentication

<br/>

### 009 Creating The User Model

<br/>

### 010 User Registration Postman

https://github.com/emerleite/node-gravatar

    $ npm install --save gravatar

<br/>

![Application](/img/pic-03-01.png?raw=true)

<br/>

### 011 Email Password Login

<br/>

![Application](/img/pic-03-02.png?raw=true)

<br/>

### 012 Creating The JWT

<br/>

![Application](/img/pic-03-03.png?raw=true)

<br/>

### 013 Passport JWT Authentication Strategy

https://github.com/themikenicholson/passport-jwt

<br/>

![Application](/img/pic-03-04.png?raw=true)

<br/>

### 014 Validation Handlers - 1

https://github.com/chriso/validator.js/

<br/>

![Application](/img/pic-03-05.png?raw=true)

<br/>

### 015 Validation Handlers - 2

<br/>

![Application](/img/pic-03-06.png?raw=true)

<br/>

![Application](/img/pic-03-07.png?raw=true)

<br/>

![Application](/img/pic-03-08.png?raw=true)

<br/>

## 04 Profile API Routes

<br/>

### 016 Aside - Front End Visual

<br/>

### 017 Creating The Profile Model

<br/>

### 018 Current User Profile Route

<br/>

![Application](/img/pic-04-01.png?raw=true)

<br/>

### 019 Create Update Profile Routes

<br/>

### 020 Profile Field Validations

<br/>

![Application](/img/pic-04-02.png?raw=true)

<br/>

![Application](/img/pic-04-03.png?raw=true)

<br/>
with  
.populate("user", ["name", "avatar"])

<br/>

![Application](/img/pic-04-04.png?raw=true)

<br/>

### 021 More Profile API Routes

<br/>

![Application](/img/pic-04-05.png?raw=true)

<br/>

### 022 Add Experience Education Routes

<br/>

![Application](/img/pic-04-06.png?raw=true)

<br/>

![Application](/img/pic-04-07.png?raw=true)

<br/>

### 023 Delete Education Experience Routes

<br/>

## 05 Post API Routes

<br/>

### 024 Creating The Post Model

<br/>

### 025 Post Create Route

<br/>

![Application](/img/pic-05-01.png?raw=true)

<br/>

### 026 Get Delete Post Routes

<br/>

![Application](/img/pic-05-02.png?raw=true)

<br/>

![Application](/img/pic-05-03.png?raw=true)

<br/>

![Application](/img/pic-05-04.png?raw=true)

<br/>

### 027 Post Like Unlike Routes

<br/>

![Application](/img/pic-05-05.png?raw=true)

<br/>

![Application](/img/pic-05-06.png?raw=true)

<br/>

### 028 Add Remove Comment Routes

<br/>

![Application](/img/pic-05-07.png?raw=true)

<br/>

![Application](/img/pic-05-08.png?raw=true)

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
