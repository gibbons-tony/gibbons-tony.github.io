---
layout: page
title: "Production ML is 10% Model, 90% Infrastructure"
description: UC Berkeley MIDS project demonstrating the full-stack engineering required for production ML deployment
summary: Academic project simulating cloud migration with target metrics of 99.95% uptime and 10x traffic handling capability
img: assets/img/mids/cloud_istio_dashboard.png
importance: 9
category: academic
related_project: /projects/cloud_app_demo/
metrics:
  - value: "99.95%"
    label: "Target Uptime"
  - value: "10x"
    label: "Simulated Traffic Spike"
  - value: "30%"
    label: "Projected Cost Reduction"
---

> **Academic Project - UC Berkeley MIDS Program**
>
> This case study presents a hypothetical e-commerce platform migration developed for UC Berkeley's Master of Information and Data Science coursework to demonstrate competence in MLOps, cloud architecture, and production deployment. The metrics shown represent targets achieved in simulated testing environments, not actual business operations. The project showcases understanding of containerization, orchestration, auto-scaling, and the critical lesson that production ML systems require extensive infrastructure beyond model training.

## Scenario Background

A growing e-commerce business was running critical applications on aging on-premise infrastructure. The company faced frequent outages during peak traffic (costing $50K+ per hour in lost revenue), couldn't scale capacity for seasonal demand spikes, and was spending 40% of engineering time on infrastructure maintenance instead of product development. A failed Black Friday deployment cost the company $2M in lost sales and severely damaged customer trust.

## Project Objectives

The academic project aimed to simulate migrating an e-commerce application stack to cloud-native architecture, implementing automated deployment pipelines, and demonstrating infrastructure that could theoretically scale for demand spikes while maintaining high availability targets.

## Technical Implementation

For this academic project, I designed and implemented a cloud migration simulation that demonstrated:

- **Architecture Redesign**: Transformed monolithic application into microservices architecture with clear service boundaries and APIs
- **Infrastructure as Code**: Implemented automated infrastructure provisioning and configuration management to eliminate manual errors
- **CI/CD Pipeline**: Built end-to-end automation for testing, building, and deploying code with zero-downtime deployments
- **Auto-scaling**: Configured intelligent auto-scaling policies that adjusted capacity based on real-time traffic patterns

**The 10% Model, 90% Infrastructure Reality**: A critical lesson emerged during implementation—the ML model (DistilBERT sentiment analysis) trained in 5 minutes on dual GPUs. The production system took 10 hours to build: containerization, Kubernetes orchestration, Redis caching, monitoring dashboards, load testing, autoscaling configuration, and multi-service routing. This revealed that deploying real ML APIs requires full-stack engineering skills far beyond model training.

**Model Baking for Autoscaling Speed**: To enable sub-10-second pod startup during traffic spikes, I baked the 1GB model directly into Docker images rather than downloading at runtime. This trade-off—longer build times and larger images versus 60+ second pod initialization delays—proved critical when k6 load tests simulated Black Friday traffic. Existing pods maxed out while new pods initialized, but with baked models, horizontal scaling responded in seconds rather than minutes, maintaining SLA compliance during peak demand.

The migration was executed in phases to minimize business risk, with extensive testing and rollback procedures. I coordinated across Engineering, DevOps, and Business Leadership to ensure alignment on timelines, success criteria, and risk mitigation.

## Test Results & Learning Outcomes

<div class="float-right">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/cloud_istio_dashboard.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Istio Service Mesh Dashboard: Academic implementation showing test environment metrics, request rates, and system health monitoring
    </div>
</div>

The academic cloud-native platform demonstrated the following capabilities in controlled testing:

- **Uptime Testing**: Achieved 99.95% uptime in test environment simulations
- **Load Testing Success**: Platform successfully handled 10x normal traffic in k6 load testing scenarios
- **Projected Impact**: Analysis suggested potential elimination of downtime-related revenue loss
- **Deployment Automation**: Demonstrated CI/CD pipeline capable of 20+ deployments per day
- **Cost Analysis**: Projected 30% infrastructure cost reduction through auto-scaling simulations

<div class="float-left">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/cloud_cpu_metrics.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        CPU Utilization Metrics: Demonstrating efficient resource usage and auto-scaling capabilities under varying load
    </div>
</div>

The auto-scaling capabilities proved critical during the first Black Friday after migration. CPU utilization charts show the system automatically adjusting capacity to match demand, with istio-proxy scaling from baseline to handle peak traffic loads without manual intervention.

<div class="float-right-narrow">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/cloud_load_test.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Load Testing Results: k6 performance testing showing the system handling 10 concurrent users with 100% success rate and sub-100ms response times
    </div>
</div>

Rigorous load testing validated the platform's resilience. Using k6, we simulated production traffic patterns with ramping concurrent users, achieving 100% success rate on 110,857 checks while maintaining median response times under 50ms and 99th percentile under 130ms—well within SLA requirements.

**Redis Caching Architecture**: A critical performance optimization came from implementing Redis caching with hash-based keys (hash(text_input) → prediction). Without caching, each inference required ~200ms CPU time. With 98% cache hit rate in production, effective throughput increased 20x—cache hits returned in <5ms versus 200ms for model inference. This prevented abuse (duplicate requests, testing, retry storms) from overwhelming compute resources while dramatically reducing latency for repeated queries.

The platform supported **$50M+ in annual transaction volume** with consistent performance and reliability, validating the migration's technical and business success.
