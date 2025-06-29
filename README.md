# Desafío Técnico – Productos API

> **¿Cómo levantar el proyecto?**  
> 👉 Lee el archivo [run.md](./run.md) para instrucciones paso a paso con Docker Compose.

Este repositorio contiene la API de productos…


## Validación de cobertura de código (Code Coverage)

Para ver el porcentaje de cobertura de código del backend:

1. Ejecutá los tests del backend:
    ```bash
    cd backend
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

> **Tip:** Si usás Docker para los tests, asegurate de mapear la carpeta `target/site/jacoco` como volumen para poder acceder a los archivos generados desde tu máquina.

---

## URLs importantes

- **Backend API:** [http://localhost:8080/api/products/MLC34729758](http://localhost:8080/api/products/MLC34729758)
- **Frontend:** [http://localhost:5713/](http://localhost:5713/)

