# Technical Challenge – Products API

> **How to run the project?** \> 👉 Read the [run.md](https://www.google.com/search?q=./run.md) file for step-by-step instructions with Docker Compose.

This repository contains the Products API…

## Testing the application

When the log shows something similar to `Listening on http://0.0.0.0:3000`, open your browser and visit:

```
http://localhost:3000/productos/MLC34729758
```

You should see the product details page.

Other IDs to test

```
MLC1027172690
MLC42453668
IDNOTEXIST
```

-----

## Code Coverage Validation

### To see the backend code coverage percentage:

1.  Run the backend tests:
    ```bash
    cd item-service
    mvn clean test jacoco:report
    ```
2.  Open the coverage report in your browser:
    ```
    target/site/jacoco/index.html
    ```

Or, if you prefer, from the terminal on Mac:
` bash open target/site/jacoco/index.html  `
3\.  The report will show the total coverage percentage and the detail by class/package.

### To see the frontend code coverage percentage:

1.  Run the frontend tests:
    ```bash
    cd meli-item-frontend
    npm install
    npm run test
    ```
2.  Run the coverage report:
    ```
    npm run coverage
    ```

#### Or inside the frontend docker container

````
```
npm run test
npm run coverage
```
````

-----

## Important URLs

  - **Backend API:** [http://localhost:8080/api/products/MLC34729758](https://www.google.com/search?q=http://localhost:8080/api/products/MLC34729758)
  - **Frontend:** [http://localhost:3000/](https://www.google.com/search?q=http://localhost:3000/)
