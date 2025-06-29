# run.md – Guía rápida de ejecución 🚀

## Prerrequisitos

* **Docker Engine** 24 o superior
* **Git**

---

## 1. Clonar el repositorio

```bash
git clone https://github.com/Igna240/meli-challenge.git
cd <meli-challenge>
```

---

## 2. Construir y levantar con Docker Compose

```bash
docker compose up --build
```

* Agregá `-d` para ejecutar en segundo plano:

  ```bash
  docker compose up --build -d
  ```

* La primera ejecución puede tardar unos minutos mientras se descargan imágenes y se compila el proyecto.

---

## 3. Probar la aplicación

Cuando el log muestre algo similar a `Listening on http://0.0.0.0:3000`, abrí tu navegador y visitá:

```
http://localhost:3000/productos/MLC34729758
```

Deberías visualizar la página de detalles del producto.

---

¡Listo! Con estos pasos tenés el proyecto clonado, los contenedores levantados y la app corriendo. 🎉
