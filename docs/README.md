# Create Your Own Grafana Environment

The Viam - Grafana data source plugin is open source and you can install it in any self managed Grafana instance.
The following instructions shoulp help with setting up your own instance on private infrastructure or in the public cloud.

## On Personal Infrastructure

```bash
# Build the image for local use
docker build -t viam-grafana .

# Run the image locally
docker run -d --name=viam-grafana -p 3000:3000 viam-grafana
```

You can now login to your Grafana instance with these credentials: admin password: admin (Don't forget to change!!) [localhost:3000](http://localhost:3000).


## Finally - Configure a Dashboard Displaying Viam Data

Dashboard configuration instructions: [Create a Viam Dashboard](configure-dashboard.md)


