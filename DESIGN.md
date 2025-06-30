# Informe de Diseño – Desafío Técnico “Productos API”

## 1. Introducción
Este proyecto entrega un **backend Spring Boot**, un **frontend React** y un **docker-compose** para levantar todo con un solo comando. Permite listar y consultar productos por ID.

## 2. Arquitectura

```mermaid
graph TD
  FE[Frontend<br/>React + Vite] -->|REST| BE[Backend<br/>Spring Boot]
  BE --> MEM[Repositorio en memoria<br/>products.json]
  ```
El backend expone `/productos/{id}` y el frontend lo consume. Ambos corren en contenedores independientes.


## 3. Elecciones de diseño
- **Spring Boot 3 + Maven**: rapidez de desarrollo y familiaridad con el ecosistema.
- **Repositorio en memoria**: evita dependencias externas → setup < 30 s.
- **Manejo de errores**: `ProductNotFoundException` + `@RestControllerAdvice` ⇒ todas las respuestas de error son JSON uniformes.
- **Docker Compose**: unifica arranque (`docker compose up --build`) y cumple con los requisitos de portabilidad.
- **Jacoco** integrado en `pom.xml` + `mvn verify` genera reporte de cobertura.

## 4. Pruebas y cobertura
| Tipo       | Framework | Archivos cubiertos | Cobertura |
|------------|-----------|--------------------|-----------|
| Unitario   | JUnit 5   | Service, Repository | 93 % |
| Integración| Spring MockMvc | Controller + ErrorHandler | 81 % |

Jacoco reporta **82 % global** (`target/site/jacoco/index.html`).

## 5. Desafíos y cómo los resolví
- **Validar IDs sin sobrecargar lógica** → expresión regular y excepción 400 si falla.
- **Error 404 coherente** → handler global convierte ausencia en repo a respuesta REST.
- **Sincronizar FE y BE en distintos puertos** → proxy en `vite.config.ts`.
- **Tiempo limitado** → prioricé TDD en la capa de dominio y dejé TODOs para features extra.

## 6. Próximos pasos
- Persistencia en Postgres + Flyway.
- Observabilidad (Micrometer + Prometheus).
- Pipeline CI en GitHub Actions ejecutando tests y publicando reporte Jacoco.