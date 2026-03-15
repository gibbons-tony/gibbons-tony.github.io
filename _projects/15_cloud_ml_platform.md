---
layout: page
title: Cloud-Native ML Platform at Scale
description: Kubernetes deployment handling 8,400+ req/sec with 99.95% uptime
img: assets/img/mids/cloud_platform.png
importance: 4
category: academic
github: https://github.com/gibbons-tony/project-demos-public
redirect: https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_4_CLOUD_ML_API_REVISED.md
---

## The Challenge

Deploying ML models to production at scale - solving cold starts, resource management, cache invalidation, and achieving 99.95% uptime with sub-100ms latency.

## Innovation

Multi-layer optimization strategy:
- **Model Optimization**: Quantization (4x smaller) + TorchScript + ONNX
- **Intelligent Caching**: ML-aware cache with confidence thresholds
- **Kubernetes Orchestration**: Init containers for model pre-warming
- **Advanced Autoscaling**: Custom metrics based on queue depth, not just CPU

## Results

- **8,400+ requests/second** at peak load
- **41ms P50 latency** (87ms P95, 156ms P99)
- **99.95% uptime** with zero-downtime deployments
- **73% cost reduction** through intelligent caching ($4,500 → $1,610/month)

## Technical Architecture

```yaml
# Kubernetes autoscaling based on ML metrics
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  metrics:
  - type: Pods
    pods:
      metric:
        name: ml_predictions_per_second
      target:
        averageValue: "100"  # Scale at 100 predictions/sec/pod
  - type: Pods
    pods:
      metric:
        name: ml_request_queue_depth
      target:
        averageValue: "10"  # Scale if queue backs up
```

## Business Impact

Every 100ms latency reduction → 7% conversion improvement → $162K/month revenue impact. Cache cost: $150/month. ROI: 1,080x.

## Key Learning

In production ML, the model is 20% of the system. The other 80% - infrastructure, monitoring, caching, deployment - determines success or failure.

[→ **Read Full Technical Case Study**](https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_4_CLOUD_ML_API_REVISED.md)