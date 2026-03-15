---
layout: page
title: Medical AI with Deep Learning
description: Hybrid CNN achieving 91.2% accuracy on chest X-ray classification with interpretability
img: assets/img/mids/xray_gradcam.png
importance: 1
category: academic
github: https://github.com/gibbons-tony/project-demos-public
redirect: https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_1_COMPUTER_VISION_XRAY_REVISED.md
---

## The Challenge

Classifying 14 different chest conditions from X-rays while maintaining interpretability for healthcare compliance - a critical requirement that pure deep learning solutions often fail to address.

## Innovation

Built a hybrid architecture combining classical computer vision techniques with deep learning:
- **Engineered Features**: GLCM texture analysis, HOG shape descriptors, frequency domain analysis
- **Deep Learning**: Transfer learning with ResNet50 backbone
- **Attention Fusion**: Multi-head attention mechanism to dynamically weight feature sources

## Results

- **91.2% accuracy** across 14 disease classifications
- **Grad-CAM visualizations** showing model focus areas for interpretability
- **33% reduction** in diagnosis time
- **Data efficient**: 85% accuracy with just 1,000 training images

## Technical Highlights

```python
class HybridMedicalClassifier(nn.Module):
    def __init__(self):
        self.cnn_branch = MedicalCNN()
        self.feature_branch = EngineereedFeatures()
        self.attention = nn.MultiheadAttention(256, num_heads=8)
```

The system learns when to trust engineered features (clear anatomical abnormalities) versus deep features (subtle texture patterns).

## Key Learning

In regulated industries like healthcare, interpretability can be more valuable than marginal accuracy gains. The hybrid approach achieved both high performance and explainability.

[→ **Read Full Technical Case Study**](https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_1_COMPUTER_VISION_XRAY_REVISED.md)