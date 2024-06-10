# Viam - Deploy Grafana with Kubernetes

## Deploy on GCP Kubernetes Engine "GKE"

This guide helps you provision a stateful Grafana instance to your personal GCP Kubernetes Engine (GKE).

To get started, the first thing you have to do, if you haven't done already, is to enable the Kubernetes API in the GCP console / Web UI.

After this step you can then use the GCP command line interface on your local machine and execute the following commands. 

Change them wherever applicable! E.g. change the cloud region etc.

1. Create a Kubernetes cluster:

```
gcloud container clusters create-auto soleng-grafana --location=us-central1
```

2. Get authentication credentials for the cluster:

```
gcloud container clusters get-credentials soleng-grafana --location us-central1
```

3. Create the deployment:
You can run the following command directly from within your local command line.

```
kubectl apply -f viam-grafana-kubdep.yaml
```

You can now login to your Grafana instance with these credentials: admin password: admin

*DO NOT FORGET TO CHANGE THE PASSWORD!*

### TODO
- [ ] [Add SSL certificates](https://estl.tech/configuring-https-to-a-web-service-on-google-kubernetes-engine-2d71849520d)