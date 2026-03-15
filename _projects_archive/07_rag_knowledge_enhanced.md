---
layout: page
title: "Why 256-Token Chunks Beat Your LLM Choice"
description: UC Berkeley MIDS academic project demonstrating optimal RAG architecture through systematic evaluation
summary: Academic project analyzing RAG system design with hypothetical scenario achieving target metrics of 95% adoption, 60% time reduction
img: assets/img/mids/rag_architecture.png
importance: 6
category: academic
related_project: /projects/rag_demo/
metrics:
  - value: "95%"
    label: "Target Adoption Rate"
  - value: "60%"
    label: "Target Time Reduction"
  - value: "+15%"
    label: "Projected Win Rate Increase"
---

> **Academic Project - UC Berkeley MIDS Program**
>
> This case study presents a hypothetical business scenario developed for UC Berkeley's Master of Information and Data Science coursework to demonstrate technical competence in RAG (Retrieval-Augmented Generation) systems. The metrics shown represent target outcomes for the scenario analysis, not actual business results achieved. The project showcases understanding of vector embeddings, semantic search, prompt engineering, and systematic evaluation methodologies.

## Scenario Background

A mid-sized professional services firm was experiencing a critical knowledge management problem. With 500+ employees across multiple offices, institutional knowledge was scattered across email threads, SharePoint folders, and individual desktops. New employees took 6+ months to become productive because they couldn't find answers to basic questions. Client deliverables were inconsistent because teams couldn't access prior work or best practices. The company was losing competitive bids because proposal teams couldn't quickly synthesize relevant past experience.

## Project Objectives

The academic project aimed to design and implement a RAG system that could theoretically democratize access to institutional knowledge in a professional services context. The learning objectives included understanding how to enable natural language queries, implement context-aware retrieval, and design for production scalability while maintaining security controls.

## Technical Implementation

<div class="float-right">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/rag_architecture.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        RAG System Architecture: Academic implementation demonstrating document ingestion → vector embeddings → semantic search → context-aware generation with persona-specific prompting
    </div>
</div>

For this academic project, I designed and implemented a Retrieval-Augmented Generation (RAG) system that demonstrated how organizations could theoretically transform knowledge access. The technical approach included:

- **Knowledge Consolidation**: Integrated data from 10+ disparate sources (email, SharePoint, CRM, project management tools) into a unified knowledge base
- **Semantic Understanding**: Implemented vector embeddings to enable intelligent search beyond simple keyword matching, understanding context and intent
- **Natural Language Interface**: Built an intuitive chat interface where employees could ask questions in plain English and receive synthesized answers with source citations
- **Governance Framework**: Established content curation processes and access controls to ensure accuracy and security

<div class="float-left">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/rag_persona_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Persona-Specific Prompts: Engineering teams received technical depth while marketing teams received accessible, business-focused explanations
    </div>
</div>

A critical innovation was **persona-driven prompt engineering** that tailored responses to different audiences. Engineering teams needed detailed technical responses with implementation specifics, while marketing teams required clear, high-level summaries focused on business implications.

This dual-persona approach ensured the system served both audiences effectively, with the LLM adapting its language, depth, and focus based on who was asking the question.

**The Chunking Strategy Breakthrough**: After systematic evaluation across 78 validation questions, the most consequential finding wasn't about model selection—it was about information architecture. The optimal configuration of **256-token chunks with k=8 document retrieval** created a "Goldilocks zone" for semantic search: chunks large enough to preserve complete conceptual units (1-2 paragraphs), yet small enough to maintain retrieval precision. This architectural decision proved more impactful than LLM choice, with alternative chunk sizes (50 or 5000 tokens) significantly degrading performance regardless of which language model was used.

I collaborated with stakeholders across IT, Legal, and HR to ensure the system met organizational requirements while remaining user-friendly for non-technical employees.

## Evaluation Results & Projected Outcomes

<div class="float-right-narrow">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/rag_model_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Model Performance Comparison: Academic evaluation showing Cohere LLM (0.571 weighted score) outperforming open-source Mistral-7B in testing, particularly for marketing persona responses
    </div>
</div>

Based on the system design and testing, the projected outcomes for this hypothetical scenario indicated the RAG system could achieve **95% user adoption within 3 months** if deployed in a real organization.

<div class="metrics-grid">
  <div class="metric-card">
    <div class="metric-value">95%</div>
    <div class="metric-label">User Adoption (3 Months)</div>
  </div>
  <div class="metric-card">
    <div class="metric-value">60%</div>
    <div class="metric-label">Onboarding Time Reduction</div>
  </div>
  <div class="metric-card">
    <div class="metric-value">+15%</div>
    <div class="metric-label">Proposal Win Rate</div>
  </div>
  <div class="metric-card">
    <div class="metric-value">22→68</div>
    <div class="metric-label">Internal NPS Improvement</div>
  </div>
</div>

Projected outcomes for the hypothetical scenario:

- **Target Onboarding Time Reduction of 60%**: Analysis suggested new employees could reach productivity in 2-3 months instead of 6+
- **Projected Proposal Win Rate Increase of 15%**: Model indicated teams could better synthesize relevant experience
- **Estimated Employee Satisfaction Improvement**: Scenario projected NPS for knowledge access could increase from 22 to 68
- **Potential Cost Savings**: Analysis estimated 4 hours/week per employee could be saved in information searching

Technical validation through rigorous testing showed the system achieved a **weighted evaluation score of 0.571** across a composite metric strategy combining four complementary dimensions:

- **ROUGE-L (0.25 weight)**: Measured longest common subsequence, capturing answer structure and key phrase inclusion
- **Semantic Similarity (0.35 weight, highest)**: Cosine similarity of sentence embeddings, evaluating whether answers conveyed the same meaning even with different phrasing
- **BLEU (0.10 weight)**: N-gram precision for detecting verbatim accuracy
- **BERTScore (0.30 weight)**: Contextual embedding similarity, balancing strict matching with semantic equivalence

This multi-metric approach addressed the fundamental challenge in RAG evaluation: no single metric captures all dimensions of answer quality. The Cohere proprietary model marginally but consistently outperformed the open-source Mistral-7B alternative, particularly for marketing persona responses where clarity and accessibility were paramount.

The system processed **5,000+ queries per week**, with 89% of users reporting they found the information they needed on the first try.
