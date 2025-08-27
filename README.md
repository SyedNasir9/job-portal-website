# Job Portal Website - DevOps Enhanced

A responsive Job Portal web app built with React.js, allowing users to explore job listings, view company profiles, and post new job openings. This version demonstrates DevOps practices by containerizing the app and automating build & deployment with Jenkins.

🚀 Features

🔍 Search jobs by title or location

📋 View job details by clicking on listings

🏢 Explore a list of hiring companies

📝 Post a new job using a simple form

✅ Toast notifications for user feedback

🧭 Client-side routing with React Router

🐳 Dockerized for consistent and portable deployment

⚙️ Automated build and DockerHub push via Jenkins pipeline


🛠️ Tech Stack
| Layer            | Tools / Tech          |
| ---------------- | --------------------- |
| Frontend         | React.js, HTML5, CSS3 |
| Routing          | React Router DOM      |
| Notifications    | React Toastify        |
| State Management | React useState        |
| Containerization | Docker                |
| CI/CD            | Jenkins               |
| Deployment       | DockerHub             |



📦 Docker Setup

The app is packaged using Docker and served via NGINX in a container.

To build and run locally:

# Build Docker image
docker build -t yourusername/job-portal-frontend .

# Run container locally
docker run -p 3000:80 yourusername/job-portal-frontend


Access the app at: http://localhost:3000

⚙️ DevOps Automation

Jenkins Pipeline:

Automatically builds the Docker image on code changes

Logs into DockerHub

Pushes the image to DockerHub for ready-to-deploy use

This demonstrates practical CI/CD workflows for frontend applications.

🌐 DockerHub Link

View the Docker image on DockerHub:
https://hub.docker.com/r/syednasir9/job-portal-frontend/tags


📝 Notes & Highlights

Why Docker? Containerization ensures the app runs consistently across any environment.

CI/CD with Jenkins: Demonstrates automated build, test, and deployment pipelines.

Portable Deployment: Docker image can be reused for any cloud or local environment.

Skill Showcase: Highlights frontend React skills plus foundational DevOps practices.
