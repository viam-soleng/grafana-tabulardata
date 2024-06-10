# Viam - Deploy Grafana with Docker

## On Personal Infrastructure

```bash
# Build the image for local use
docker build -t viam-grafana .

# Run the image locally
docker run -d --name=viam-grafana -p 3000:3000 viam-grafana
```

You can now login to your Grafana instance with these credentials: admin password: admin (Don't forget to change!!) [localhost:3000](http://localhost:3000).


## Build New Docker Image

```
# Build the image for local use
docker build -t viam-grafana .

# Or in the case you want to upload it to an image registry and your environment is different
docker build -t viam-grafana --platform linux/amd64 .
```