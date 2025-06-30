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

¡Listo! Con estos pasos tenés el proyecto clonado, los contenedores levantados y la app corriendo. 🎉
