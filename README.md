# Fast & Fabulous event app (frontend)

## Project structure
All the project elements are separated into two folders : **'public'** and **'dashboard'** to separate the frontoffice and the backoffice. The 'public' folder contains the public site, the 'dashboard' folder contains the admin and provider dashboard.

### Router and Views
The router is located in the **'router'** folder. It contains the routes for the frontoffice and the backoffice. 

The views are located in the **'views'** folder. The views are the pages of the app. The views are separated into two folders : 'public' and 'dashboard' to separate the frontoffice and the backoffice. 
An index.js file is located in the Views for each part of the app (frontoffice and backoffice). This file permits to import all the views of the folder in one line in the router.

### Components
The components are located in the **'components'** folder. The components are separated into two folders : 'public' and 'dashboard' to separate the frontoffice and the backoffice.

### Store


### Assets
The assets are located in the **'assets'** folder. The assets are separated into folders, witch represent the type of asset (css, pictures, js, ...).


## Project setup
To install the project and its dependencies, run the following command in the project folder :
``` sh
npm install
```

### Compiles and hot-reloads for development
``` sh
npm run serve
```

### Compiles and minifies for production
``` sh
npm run build
```

### Lints and fixes files
``` sh
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
