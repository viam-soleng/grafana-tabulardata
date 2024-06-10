# Viam - Deploy Grafana with Docker

These instructions will help you create a Docker image containing the Viam - Grafana Data Source Plugin.


## Run Grafana Container incl. Plugin (Single Command)

This command uses the official Grafana Docker image, installs the Viam data source plugin and starts a container, all in a single command:

```bash
docker run -d -p 3000:3000 --name=grafana \
  -e "GF_INSTALL_PLUGINS=https://github.com/viam-soleng/grafana-tabulardata/raw/main/releases/viam-grafana-0.1.0.zip;viam-datasource" \
  -e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=viam-datasource" \
  grafana/grafana:10.4.2
```

## Build and Run Your Own Image

For this purpose a sample [Dockerfile](../Dockerfile) is provided. Feel free to change the Dockerfile to your needs and use the following commands to create and run the image.

```bash
# Build the image for local use
docker build -t viam-grafana .

# Or in the case you want to upload it to an image registry and your environment is different
docker build -t viam-grafana --platform linux/amd64 .
```

```bash
# Run the image locally
docker run -d --name=viam-grafana -p 3000:3000 viam-grafana
```

You can now login to your Grafana instance with these credentials: admin password: admin (Don't forget to change!!) [localhost:3000](http://localhost:3000).





