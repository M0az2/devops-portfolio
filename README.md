# DevOps Portfolio

A modern DevOps portfolio built with React and Vite, containerized with Docker, scanned with Trivy, published to Docker Hub, and deployed on Vercel.

## Live Demo

**https://moaznasr-portfolio.vercel.app/**

## Docker Image

**Docker Hub:** `moaz215/devops-portfolio`

```bash
docker pull moaz215/devops-portfolio:latest
```

Run locally:

```bash
docker run -d -p 8090:80 --name devops-portfolio moaz215/devops-portfolio:latest
```

Then open:

```text
http://localhost:8090
```

## Project Architecture

```text
React / Vite
      │
      ▼
   npm build
      │
      ▼
Multi-Stage Docker Build
      │
      ├── Node.js 22 Alpine
      │
      ▼
   Nginx Alpine
      │
      ▼
 Docker Image
      │
      ├── Trivy Security Scan
      │
      ▼
   Docker Hub
      │
      ▼
    Vercel
```

## DevOps Pipeline

The project uses GitHub Actions to automate the CI/CD workflow.

```text
Git Push
   │
   ▼
GitHub Actions
   │
   ├── Install Dependencies
   │
   ├── Run ESLint
   │
   ├── Build Docker Image
   │
   ├── Trivy Security Scan
   │
   ├── Login to Docker Hub
   │
   └── Push Docker Image
```

## Technologies

* React
* Vite
* JavaScript
* Docker
* Docker Compose
* Nginx
* Alpine Linux
* GitHub Actions
* Trivy
* Docker Hub
* Vercel
* Git & GitHub

## Docker

The application uses a multi-stage Docker build.

### Build Stage

The first stage uses Node.js 22 Alpine to install dependencies and build the React application.

### Production Stage

The production image uses Nginx Alpine to serve the generated static files.

This approach keeps the final image smaller and avoids including Node.js, npm, and development dependencies in the production container.

## Security

Trivy is integrated into the GitHub Actions pipeline to scan the Docker image for vulnerabilities.

The pipeline fails when **HIGH** or **CRITICAL** vulnerabilities are detected.

## Docker Compose

The project also includes a Docker Compose configuration for local development.

```bash
docker compose up -d --build
```

Stop the application:

```bash
docker compose down
```

The application will be available at:

```text
http://localhost:8090
```

## Local Development

Clone the repository:

```bash
git clone https://github.com/M0az2/devops-portfolio.git
cd devops-portfolio
```

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
devops-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   └── certificates/
├── src/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── vite.config.js
└── README.md
```

## Goals

This project demonstrates practical DevOps concepts including:

* Containerization
* Multi-stage Docker builds
* Linux/Alpine-based images
* Nginx
* Docker Compose
* CI/CD automation
* Container security scanning
* Docker image publishing
* Cloud deployment
* Git-based workflows

## Author

**Moaz Nasr Eldin**

