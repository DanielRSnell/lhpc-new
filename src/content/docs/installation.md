---
title: Installation
description: Deploy Amalgamy in your cloud environment with enterprise-grade configurations for AI/HPC orchestration.
---

# Installation

## Prerequisites

Before deploying Amalgamy, ensure your environment meets these requirements:

- **Kubernetes Cluster** - Version 1.26 or later with RBAC enabled
- **Helm** - Version 3.8+ for package management
- **kubectl** - Configured with cluster admin privileges
- **Docker** - For container image management
- **Cloud Provider CLI** - AWS CLI, Azure CLI, or gcloud SDK

## Supported Cloud Platforms

Amalgamy supports deployment across major cloud providers:

- **Amazon Web Services (AWS)** - EKS, EC2, S3, IAM integration
- **Microsoft Azure** - AKS, Virtual Machines, Blob Storage, Azure AD
- **Google Cloud Platform (GCP)** - GKE, Compute Engine, Cloud Storage, IAM

## Quick Start

### 1. Add Amalgamy Helm Repository

```bash
helm repo add launchhpc https://charts.launchhpc.io
helm repo update
```

### 2. Install Amalgamy

```bash
helm install launchhpc launchhpc/launchhpc \
  --namespace launchhpc-system \
  --create-namespace \
  --set cloudProvider=aws \
  --set region=us-west-2
```

### 3. Verify Installation

```bash
kubectl get pods -n launchhpc-system
kubectl get services -n launchhpc-system
```

Your Amalgamy deployment is now ready!
