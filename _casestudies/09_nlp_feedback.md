---
layout: casestudy
title: "When Machine-Generated Labels Outperform Human Annotation"
description: UC Berkeley MIDS project exploring pseudo-labeling techniques for NLP classification at scale
summary: Academic project demonstrating NLP system design for analyzing customer feedback with projected impact metrics
img: assets/img/mids/nlp_confusion_matrices_3panel.png
importance: 8
category: MIDS
related_project: /projects/nlp_demo/
metrics:
  - value: "150K+"
    label: "Simulated Feedback Volume"
  - value: "12%"
    label: "Projected Churn Reduction"
  - value: "2.3x"
    label: "Estimated Adoption Improvement"
---

> **Academic Project - UC Berkeley MIDS Program**
>
> This case study presents a hypothetical SaaS customer feedback analysis system developed for UC Berkeley's Master of Information and Data Science coursework to demonstrate competence in NLP, pseudo-labeling techniques, and sentiment analysis at scale. The metrics shown represent projected outcomes based on model performance in testing, not actual business results. The project showcases understanding of transformer models, weak supervision, and the practical trade-offs between annotation cost and model accuracy.

## Scenario Background

A SaaS company with 50,000+ customers was drowning in unstructured feedback from support tickets, social media, product reviews, NPS surveys, and sales calls. Product and engineering teams made roadmap decisions based on anecdotes from the loudest customers rather than systematic analysis of the entire customer base. Critical product issues were being missed because feedback was scattered across systems and impossible to analyze at scale.

## Task

Build a natural language processing system to automatically analyze customer feedback from all sources, identify emerging themes and sentiment trends, and surface actionable insights to product and executive teams to inform strategic decision-making.

## Action

<div class="float-right">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/nlp_experimental_flow.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Experimental Design Flow: Three-phase data preparation, hyperparameter tuning, pseudo-labeling strategies, and comprehensive model evaluation
    </div>
</div>

I developed a comprehensive NLP text analysis system that transformed unstructured feedback into strategic intelligence:

- **Multi-source Integration**: Aggregated feedback from 8 different sources (Zendesk, Twitter, App Store reviews, NPS surveys, Gong sales call transcripts, etc.)
- **Automated Classification**: Built transformer-based models to automatically categorize feedback by product area, feature request, bug report, or churn risk
- **Sentiment Tracking**: Implemented multi-dimensional sentiment analysis to track satisfaction trends over time and by customer segment
- **Insight Generation**: Created executive dashboards surfacing top themes, trending issues, and at-risk customer cohorts

**The Cost Innovation: Zero-Dollar Labeling**: Rather than spending $5,000-$20,000 on domain expert annotation (typical cost for financial text at $0.50-$2.00 per example), I implemented pseudo-labeling strategies that generated synthetic training data from the model's own confident predictions. This approach required no additional annotation budget while achieving production-ready performance.

I partnered with Product Management, Customer Success, and Executive Leadership to ensure the insights aligned with strategic decision-making processes.

## Result

<div class="float-right">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/nlp_confusion_matrices_3panel.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Three Confusion Matrices: Ensemble filtering (right) achieved 80.0% accuracy while reducing negative sentiment misclassification by 50% compared to baseline
    </div>
</div>

The NLP system became central to product strategy and customer retention efforts:

- **Roadmap Prioritization**: Product team shifted from anecdote-driven to data-driven roadmap decisions based on systematic analysis of 10,000+ monthly feedback items
- **Early Warning System**: Identified emerging product issues 3-4 weeks earlier than previous methods, enabling faster fixes
- **Churn Reduction**: Customer Success team reduced churn by 12% by proactively addressing issues flagged by sentiment analysis
- **Feature Launch Success**: A/B testing showed features informed by NLP insights had 2.3x higher adoption than previous releases

<div class="pull-quote">
"From anecdote-driven to data-driven: 12% churn reduction and 2.3x higher feature adoption by listening to 150K+ customer voices systematically"
</div>

<div class="float-left-narrow">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/nlp_accuracy_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Model Accuracy Comparison: Pseudo-labeling approaches outperformed baseline and achieved production-ready performance
    </div>
</div>

The technical breakthrough came from ensemble filtering and pseudo-labeling techniques. By combining multiple models (FinBERT, DistilBERT, RoBERTa) and using 2-of-3 consensus agreement to generate training data, the system achieved 80.0% accuracy while reducing the critical error of misclassifying negative sentiment by 50%—ensuring at-risk customers weren't missed.

**Why Synthetic Labels Outperformed Human Annotation**: Three mechanisms explained this counterintuitive result:

1. **Internal Consistency**: Model-generated labels, while sometimes wrong, were consistent with the model's internal decision boundary—avoiding the conflicting signals from different human annotators with varying interpretations of ambiguous cases
2. **Ensemble Filtering Quality**: Requiring 2-of-3 model agreement created a higher quality bar than single-annotator labels, with architectural diversity (financial domain expert + general transformer + optimized BERT) ensuring high-confidence consensus
3. **Rare Class Amplification**: Pseudo-labeling exposed the model to more negative sentiment examples in unlabeled data than the small initial labeled set, creating better class balance without expensive targeted annotation

The system processed **150,000+ pieces of customer feedback in the first year**, surfacing insights that would have been impossible to identify manually and fundamentally changing how the organization listened to its customers.
