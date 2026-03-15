---
layout: page
title: Financial Sentiment Analysis with Self-Training
description: Achieved 88.1% accuracy using only 60% labeled data through intelligent debiasing
img: assets/img/mids/nlp_sentiment.png
importance: 2
category: academic
github: https://github.com/gibbons-tony/project-demos-public
redirect: https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_2_NLP_SENTIMENT_ANALYSIS_REVISED.md
---

## The Challenge

Financial sentiment analysis with limited labeled data - a common industry problem where annotation costs $5-50 per document, making full supervision prohibitively expensive.

## Innovation

Developed a self-training system with three debiasing strategies:
- **Confidence-Based Filtering**: Only use predictions above 90% confidence
- **Ensemble Agreement**: Multiple models must agree before accepting pseudo-labels
- **Distribution Matching**: Prevent drift by maintaining label distributions

## Results

- **88.1% accuracy** with only 60% labeled data
- **Closed 68%** of the gap to fully-supervised learning
- **$20,000 savings** in labeling costs
- **Applied to S&P 500** earnings calls for trading signals

## Technical Approach

```python
def generate_pseudo_labels(self, unlabeled_data):
    # Teacher creates labels for unlabeled data
    with torch.no_grad():
        logits = self.teacher(batch)
        probs = F.softmax(logits, dim=-1)

        # Only use high-confidence predictions
        max_prob, predicted = torch.max(probs, dim=-1)
        mask = max_prob > self.confidence_threshold
```

Self-training with debiasing achieved +5.8% improvement over baseline, demonstrating that implementation details matter more than the core technique.

## Key Learning

Compound gains from multiple small improvements create large total gains. Domain pretraining (+6%), self-training (+1%), and debiasing (+5%) combined for +12% total improvement.

[→ **Read Full Technical Case Study**](https://github.com/gibbons-tony/project-demos-public/blob/main/PROJECT_2_NLP_SENTIMENT_ANALYSIS_REVISED.md)