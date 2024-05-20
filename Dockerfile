FROM maven AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk-jammy
COPY --from=build /target/assn1-0.0.1-SNAPSHOT.jar assn1.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]