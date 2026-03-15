---
layout: page
title: "Medical Imaging AI for Chest X-Ray Diagnosis"
description: UC Berkeley MIDS project demonstrating deep learning and traditional ML approaches for medical image analysis
summary: Academic project building computer vision system for chest X-ray analysis achieving 96+ AUC in controlled testing
img: assets/img/mids/cv_medical/iter-001-image-light-2026-03-11T22-47-57.jpg
importance: 7
category: academic
related_project: /projects/computer_vision_demo/
metrics:
  - value: "96+ AUC"
    label: "Test Performance (14 classes)"
  - value: "80%"
    label: "Traditional ML Test Accuracy"
  - value: "F1: 0.801"
    label: "Logistic Regression Score"
---

> **Academic Project - UC Berkeley MIDS Program**
>
> This case study presents an academic computer vision project developed for UC Berkeley's Master of Information and Data Science coursework to demonstrate competence in deep learning, medical image analysis, and model interpretability. The metrics shown represent performance achieved on public datasets (NIH ChestX-ray14) in a controlled academic setting, not clinical validation or real medical deployment. The project showcases understanding of CNNs, traditional ML approaches, and the importance of model interpretability in healthcare applications.

## Project Background

<div class="float-right">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/cv_medical/iter-001-image-light-2026-03-11T22-47-57.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Examples of chest X-ray pathologies the model can detect: Aortic Enlargement, Cardiomegaly, and Pleural Effusion
    </div>
</div>

Radiologists face an overwhelming workload analyzing hundreds of chest X-rays daily, with critical conditions potentially missed due to fatigue or subtle imaging patterns. Early detection of conditions like cardiomegaly, pleural effusion, and pneumothorax can be life-saving, but manual review of all images is time-intensive and prone to inter-observer variability. Healthcare systems needed an AI assistant to flag potential pathologies for radiologist review, improving diagnostic throughput without sacrificing accuracy.

## Task

Develop a deep learning computer vision system to automatically detect and classify 14 different chest X-ray pathologies, achieving diagnostic accuracy comparable to radiologists while providing interpretable insights that clinicians can trust and validate.

## Action

I developed a comprehensive computer vision system combining deep learning and traditional machine learning approaches:

- **Multi-Class Detection**: Trained models to identify 14 pathologies including Cardiomegaly, Pleural Effusion, Pneumothorax, Atelectasis, and Consolidation across 112,000+ chest X-ray images from the NIH dataset
- **Dual Architecture Approach**: Implemented both CNN-based deep learning (for maximum accuracy) and logistic regression with engineered features (for interpretability and clinical trust)
- **Feature Engineering**: Extracted domain-specific features including cardiac-thoracic ratio, lung field symmetry, and density distributions to create interpretable diagnostic indicators
- **Model Validation**: Achieved 96+ AUC for primary conditions with deep learning, while logistic regression achieved F1: 0.801 (versus CNN F1: 0.401), demonstrating that thoughtful feature engineering can outperform brute-force deep learning

The project required collaboration with radiologists to validate clinical relevance and ensure model outputs aligned with diagnostic workflows.

## Result

<div class="float-right">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/cv_medical/iter-001-image-light-2026-03-11T22-53-04.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Model Performance Comparison: Logistic Regression with feature engineering (F1: 0.801) significantly outperformed CNN (F1: 0.401)—demonstrating that traditional ML can excel with the right approach
    </div>
</div>

The medical imaging system achieved strong diagnostic performance across multiple pathology classes:

- **High Accuracy Across Conditions**: Deep learning models achieved 96+ AUC for Cardiomegaly, Pleural Effusion, and other primary conditions
- **Interpretable ML Breakthrough**: Logistic Regression with feature engineering achieved F1: 0.801, outperforming CNN (F1: 0.401) by 2x—proving domain expertise and thoughtful features beat brute-force deep learning
- **Clinical Validation**: ROC curves demonstrated consistent performance across 14 disease classes, with models effectively distinguishing between positive and negative cases
- **Model Transparency**: Traditional ML approach provided interpretable coefficients showing which imaging features (cardiac-thoracic ratio, lung opacity) drove predictions—critical for clinical trust

<div class="pull-quote float-left">
"Feature engineering beats deep learning: Logistic Regression achieved 2x better F1 score than CNNs for specialized medical imaging tasks"
</div>

<div class="float-right-narrow">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/cv_medical/iter-001-image-light-2026-03-11T22-55-27.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        ROC Curves showing high performance across all disease classes (AUC 0.96+ for primary conditions)
    </div>
</div>

The surprising technical finding challenged conventional wisdom in medical AI: traditional machine learning with thoughtful feature engineering outperformed deep learning CNNs by 2x for certain diagnostic tasks. The Logistic Regression model achieved F1: 0.801 vs. CNN's F1: 0.401, demonstrating that domain expertise (cardiac-thoracic ratios, lung field measurements) and engineered features beat brute-force deep learning when interpretability and clinical trust matter.

This dual-model approach—deep learning for maximum accuracy, traditional ML for interpretability—provided radiologists with both high-performance screening and explainable diagnostic support, addressing the critical challenge of AI adoption in clinical workflows.
