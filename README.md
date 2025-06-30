# Desafío Técnico – Productos API

> **¿Cómo levantar el proyecto?**  
> 👉 Lee el archivo [run.md](./run.md) para instrucciones paso a paso con Docker Compose.

Este repositorio contiene la API de productos…

## Probar la aplicación

Cuando el log muestre algo similar a `Listening on http://0.0.0.0:3000`, abrí tu navegador y visitá:

```
http://localhost:3000/productos/MLC34729758
```

Deberías visualizar la página de detalles del producto.

Otros ids para probar

```
MLC1027172690
MLC42453668
IDNOTEXIST
```

---

## Validación de cobertura de código (Code Coverage)

### Para ver el porcentaje de cobertura de código del backend:

1. Ejecutá los tests del backend:
    ```bash
    cd item-service
    mvn clean test jacoco:report
    ```
2. Abrí el reporte de cobertura en tu navegador:
    ```
    target/site/jacoco/index.html
    ```
   O, si preferís, desde la terminal en Mac:
    ```bash
    open target/site/jacoco/index.html
    ```
3. El reporte mostrará el porcentaje total de coverage y el detalle por clase/paquete.

### Para ver el porcentaje de cobertura de código del frontend:

1. Ejecutá los tests del frontend:
    ```bash
    cd meli-item-frontend
    npm run test
    ```
2. Ejecuta el reporte de cobertura:
    ```
    npm run coverage
    ```

---

## URLs importantes

- **Backend API:** [http://localhost:8080/api/products/MLC34729758](http://localhost:8080/api/products/MLC34729758)
- **Frontend:** [http://localhost:3000/](http://localhost:3000/)

