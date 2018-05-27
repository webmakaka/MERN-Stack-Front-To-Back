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

**Chrome extensions:**

* React Developer Tools
* Redux Developer Tools
* Allow-Control-Allow-Origin

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

<br/>

## 06 Getting Started With React The Frontend

<br/>

### 029 A Look At The Bootstrap Theme UI

<br/>

### 030 Implementing React

    # npm install -g create-react-app
    # su - nodejs

    $ cd /project/
    $ create-react-app client

    $ npm install --save-dev concurrently

    $ npm run dev

<br/>

![Application](/img/pic-06-01.png?raw=true)

<br/>

![Application](/img/pic-06-02.png?raw=true)

<br/>

### 031 Bootstrap Assets Setup

https://fontawesome.com/get-started

<br/>

### 032 Basic Layout

<br/>

![Application](/img/pic-06-03.png?raw=true)

<br/>

## 07 React Router Component State

<br/>

### 033 React Router Setup (v4)

    # cd client/
    # npm install --save react-router-dom

<br/>

![Application](/img/pic-07-01.png?raw=true)

<br/>

### 034 Creating The Register Form With State

<br/>

![Application](/img/pic-07-02.png?raw=true)

<br/>

### 035 Creating The Login Form With State

<br/>

![Application](/img/pic-07-03.png?raw=true)

<br/>

### 036 Testing Registration With Our Form - No Redux Yet

    # cd client/
    # npm install --save axios

<br/>

![Application](/img/pic-07-04.png?raw=true)

<br/>

### 037 Error Handling Display

    # cd client/
    # npm install --save classnames

<br/>

![Application](/img/pic-07-05.png?raw=true)

<br/>

### 08 Redux Authentication

<br/>

### 038 Why We Need Redux

<br/>

### 039 Redux Store Chrome Extension Setup

    # cd client/
    # npm install --save redux react-redux redux-thunk

<br/>

![Application](/img/pic-08-01.png?raw=true)

<br/>

### 040 Redux Action Reducer Workflow Example

<br/>

### 041 Registration The Error Reducer

<br/>

### 042 Redux Login Action Set Current User

    # npm install --save jwt-decode

<br/>

### 043 Login Form Functionality

<br/>

### 044 Logout Conditional Navbar Links

<br/>

## 09 Dashboard Profile State - Part 1

<br/>

### 045 TextFieldGroupInput Component

<br/>

### 046 Profile Reducer Get Current Profile

<br/>

### 047 Spinner Component Dashboard Start

<br/>

### 048 Private Route Setup

https://tylermcginnis.com/react-router-protected-routes-authentication/

<br/>

### 049 CreateProfile Component Route

<br/>

![Application](/img/pic-09-01.png?raw=true)

<br/>

### 050 Form Field Components

<br/>

### 051 Create Profile Form

<br/>

![Application](/img/pic-09-02.png?raw=true)

<br/>

### 052 Create Profile Functionality

<br/>

## 10 Dashboard Profile State - Part 2

<br/>

### 053 Profile Actions Component Delete Account

<br/>

![Application](/img/pic-10-01.png?raw=true)

<br/>

### 054 Edit Profile Component

<br/>

![Application](/img/pic-10-02.png?raw=true)

<br/>

### 055 Add Experience Form

<br/>

![Application](/img/pic-10-03.png?raw=true)

<br/>

### 056 Add Experience Functionality

<br/>

### 057 Add Education Form Functionality

<br/>

![Application](/img/pic-10-04.png?raw=true)

<br/>

### 058 Dashboard Experience Display Delete

<br/>

    # cd client/
    # npm install --save moment react-moment

<br/>

![Application](/img/pic-10-05.png?raw=true)

<br/>

### 059 Dashboard Education Display Delete

<br/>

![Application](/img/pic-10-06.png?raw=true)

<br/>

## 11 Profile Display

<br/>

### 060 Profiles Component getProfiles Action

<br/>

![Application](/img/pic-11-01.png?raw=true)

<br/>

### 061 Profile Items

<br/>

![Application](/img/pic-11-02.png?raw=true)

<br/>

### 062 Profile By Handle Sub Components

<br/>

![Application](/img/pic-11-03.png?raw=true)

<br/>

### 063 Profile Header

<br/>

![Application](/img/pic-11-04.png?raw=true)

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
