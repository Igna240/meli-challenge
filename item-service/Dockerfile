# Usa una imagen de Java para construir y correr el jar
FROM eclipse-temurin:21-jdk as build

WORKDIR /app

# Copia el código y construye el jar
COPY . .
RUN ./mvnw clean package -DskipTests

# Segunda etapa: imagen liviana solo con el jar
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copia el jar generado
COPY --from=build /app/target/*.jar app.jar

# Puerto por defecto (ajustalo si usás otro)
EXPOSE 8080

# Comando para arrancar la app
ENTRYPOINT ["java","-jar","app.jar"]
