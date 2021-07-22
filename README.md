# Bad bank app 

This project was created for the MIT xPRO Full Stack Development with MERN Certificate Program. This is the second capstone project in the course. 

## Viewing this project 
This project is hosted in an Amazon S3 Bucket at http://ben-grossbankingapplication.s3-website.us-east-2.amazonaws.com/ . 

## Component Hierarchy 
This is the React Component Hierarchy used to build the Bad Bank App. 

![BadBankHierarchy](README_images/BadBank_Component_Hierarchy.png?raw=true "BadBankHierarchy")

One important learning is that the BadBankNavbar had to hook into useLocation to consistently and accurately update active styling on the NavBar Links with respect to changing routes in this single page app. Also, useLocation worked in a child component to BrowserRouter, but it did not work when placed above BrowserRouter in the component hierarchy.  
![BadBankHierarchy2](README_images/BadBank_Component_Hierarchy2.png?raw=true "BadBankHierarchy2")

## Running this project

In the project directory, you can run:

* `npm start` - runs the app in the development mode
* `npm test` - launches the test runner in the interactive watch mode
* `npm run build` - builds the app for production to the `build` folder

## Contact
Let me know if you have any questions. 
Thanks,
Ben Gross
gross.benji@gmail.com
