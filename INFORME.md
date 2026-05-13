# Informe Laboratorio CD Pipeline

## 1. Descripción del pipeline

El pipeline implementa integración y despliegue continuo utilizando GitHub Actions.

Fases principales:

1. Build de la imagen Docker.
2. Escaneo de vulnerabilidades con Trivy.
3. Push de imagen a Docker Hub.
4. Deploy automático en servidor remoto mediante SSH.

---

## 2. Docker Multi-Stage Build

Se utilizó multi-stage build para:

- Reducir tamaño de imagen.
- Separar dependencias de build y producción.
- Mejorar seguridad y rendimiento.

---

## 3. GitHub Environments

Se configuraron:

- staging
- production

Cada entorno tiene secrets independientes para mayor seguridad.

---

## 4. Escaneo de vulnerabilidades

Se utilizó Trivy para detectar vulnerabilidades HIGH y CRITICAL antes del despliegue.

[INSERTAR CAPTURA] 

---

## 5. Evidencia del Workflow

### Build

[INSERTAR CAPTURA]

### Push Docker Hub

[INSERTAR CAPTURA]

### Deploy

[INSERTAR CAPTURA]

---

## 6. Evidencia de aplicación desplegada

Aplicación accesible desde:

http://IP_DEL_SERVIDOR

[INSERTAR CAPTURA]

---

## 7. Rollback

Para volver a una versión anterior:

```bash
docker pull usuario/mi-app:<SHA_ANTERIOR>

docker stop mi-app

docker rm mi-app

docker run -d \
  --name mi-app \
  -p 80:3000 \
  usuario/mi-app:<SHA_ANTERIOR>