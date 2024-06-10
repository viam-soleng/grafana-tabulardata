# Viam - Deploy Grafana with Docker

These instructions will help you create a Docker image containing the Viam - Grafana Data Source Plugin.

For this purpose a sample [Dockerfile](../Dockerfile) is provided. Feel free to change the Dockerfile to your needs and use the following commands to create and run the image. 

## Build Image

```bash
# Build the image for local use
docker build -t viam-grafana .

# Or in the case you want to upload it to an image registry and your environment is different
docker build -t viam-grafana --platform linux/amd64 .
```

## Run Image

```bash
# Run the image locally
docker run -d --name=viam-grafana -p 3000:3000 viam-grafana
```

You can now login to your Grafana instance with these credentials: admin password: admin (Don't forget to change!!) [localhost:3000](http://localhost:3000).
