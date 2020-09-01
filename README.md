# [Brad Traversy] MERN Stack Front To Back: Full Stack React, Redux & Node.js [2018, ENG]

**Original src:**  
https://github.com/bradtraversy/devconnector

<br/>

**Brad made a new version of this course in 2019**

**Original src v2:**  
https://github.com/bradtraversy/devconnector_2.0

**My src v2:**  
https://github.com/marley-nodejs/MERN-Stack-Front-To-Back-v2.0

<br/>
<hr/>
<br/>

## 01 Introduction

<br/>

**Host**

    $ lsb_release -a
    No LSB modules are available.
    Distributor ID:	Ubuntu
    Description:	Ubuntu 14.04.5 LTS
    Release:	14.04
    Codename:	trusty

<br/>

    $ docker -v
    Docker version 18.03.0-ce, build 0520e24

<br/>

**Inside container:**

<br/>

    $ node -v
    v9.11.1

<br/>

    $ npm -v
    6.0.1

<br/>

**Final project packages**

<br/>

    $ npm list -g --depth=0
    /usr/local/lib
    +-- create-react-app@1.5.2
    `-- npm@6.0.1

<br/>

    $ npm list --depth=0
    project@1.0.0 /project
    +-- bcryptjs@2.4.3
    +-- body-parser@1.18.3
    +-- concurrently@3.5.1
    +-- express@4.16.3
    +-- gravatar@1.6.0
    +-- jsonwebtoken@8.2.1
    +-- mongoose@5.1.1
    +-- nodemon@1.17.4
    +-- passport@0.4.0
    +-- passport-jwt@4.0.0
    `-- validator@10.2.0

<br/>

    $ npm list --depth=0
    client@0.1.0 /project/client
    +-- axios@0.18.0
    +-- classnames@2.2.5
    +-- jwt-decode@2.2.0
    +-- moment@2.22.1
    +-- react@16.3.2
    +-- react-dom@16.3.2
    +-- react-moment@0.7.0
    +-- react-redux@5.0.7
    +-- react-router-dom@4.2.2
    +-- react-scripts@1.1.4
    +-- redux@4.0.0
    `-- redux-thunk@2.2.0

<br/>

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
            "javascript": "jsx",
            "javascript": "html"
        },
        "editor.formatOnSave": true,
        "files.autoSave": "afterDelay",
        "files.autoSaveDelay": 10000,
        "prettier.singleQuote": true
    }

<br/>

**Visual Studio Code Plugins:**

- ES7 React/Redux/React-Native/JS snippets
- Bracket Pair Colorizer
- Prettier formatter for Visual Studio Code
- Live Server
- Node.js Modules Intellisense

<br/>

**Chrome extensions:**

- React Developer Tools
- Redux Developer Tools
- Allow-Control-Allow-Origin

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

<br/>

### 064 Profile About Credentials

<br/>

![Application](/img/pic-11-05.png?raw=true)

<br/>

### 065 Profile Github Touch Ups

<br/>

## 12 Posts Comments

<br/>

### 066 Post State addPost Action

<br/>

### 067 Posts Post Form Component

<br/>

![Application](/img/pic-12-01.png?raw=true)

<br/>

### 068 getPosts Action PostFeed Component

<br/>

### 069 Post Item Component

<br/>

![Application](/img/pic-12-02.png?raw=true)

<br/>

### 070 Delete Like Unlike Posts

<br/>

![Application](/img/pic-12-03.png?raw=true)

<br/>

### 071 Single Post Display

<br/>

![Application](/img/pic-12-04.png?raw=true)

<br/>

### 072 Comment Form Component Action

<br/>

![Application](/img/pic-12-05.png?raw=true)

<br/>

### 073 Comment Display Delete

<br/>

![Application](/img/pic-12-06.png?raw=true)

<br/>

## 13 Prepare Deploy

<br/>

### 074 Securing Our Keys

<br/>

### 075 Heroku Setup

<br/>

### 076 Post Build Deployment

    $ cd client/
    $ npm run build

<br/>

    # npm install -g serve
    $ serve -s build -l 8080

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
