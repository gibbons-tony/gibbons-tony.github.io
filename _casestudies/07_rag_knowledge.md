---
layout: casestudy
title: "Why 256-Token Chunks Beat Your LLM Choice"
description: Architecture decisions trump model selection—achieving 95% user adoption by optimizing information retrieval, not the language model
summary: Achieved 95% user adoption in 3 months by building RAG system that reduced onboarding time 60% and increased proposal win rate 15%
img: assets/img/mids/rag_architecture.png
importance: 6
category: MIDS
related_project: /projects/rag_demo/
metrics:
  - value: "95%"
    label: "User Adoption (3 months)"
  - value: "60%"
    label: "Onboarding Time Reduction"
  - value: "+15%"
    label: "Proposal Win Rate Increase"
---

## Situation

A mid-sized professional services firm was experiencing a critical knowledge management problem. With 500+ employees across multiple offices, institutional knowledge was scattered across email threads, SharePoint folders, and individual desktops. New employees took 6+ months to become productive because they couldn't find answers to basic questions. Client deliverables were inconsistent because teams couldn't access prior work or best practices. The company was losing competitive bids because proposal teams couldn't quickly synthesize relevant past experience.

## Task

Design and implement a system that would democratize access to institutional knowledge, enabling any employee to ask complex questions in natural language and receive accurate, context-aware answers sourced from the organization's collective expertise. The solution needed to be production-ready, scalable to thousands of users, and maintain security/privacy controls for sensitive client information.

## Action

<div class="float-right">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/rag_architecture.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        RAG System Architecture: Document ingestion → vector embeddings → semantic search → context-aware generation with persona-specific prompting
    </div>
</div>

I architected and built a Retrieval-Augmented Generation (RAG) system that transformed how the organization accessed knowledge. The approach involved:

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

## Result

<div class="float-right-narrow">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/mids/rag_model_comparison.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        Model Performance Comparison: Cohere LLM (0.571 weighted score) outperformed open-source Mistral-7B, particularly for marketing persona responses
    </div>
</div>

The RAG system achieved **95% user adoption within 3 months**, becoming the go-to resource for institutional knowledge.

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

Key business outcomes:

- **Onboarding Time Reduced 60%**: New employees reached productivity in 2-3 months instead of 6+
- **Proposal Win Rate Increased 15%**: Teams could quickly synthesize relevant experience and best practices
- **Employee Satisfaction Improved**: Internal NPS for knowledge access increased from 22 to 68
- **Cost Savings**: Reduced time spent searching for information by an estimated 4 hours/week per employee

Technical validation through rigorous testing showed the system achieved a **weighted evaluation score of 0.571** across a composite metric strategy combining four complementary dimensions:

- **ROUGE-L (0.25 weight)**: Measured longest common subsequence, capturing answer structure and key phrase inclusion
- **Semantic Similarity (0.35 weight, highest)**: Cosine similarity of sentence embeddings, evaluating whether answers conveyed the same meaning even with different phrasing
- **BLEU (0.10 weight)**: N-gram precision for detecting verbatim accuracy
- **BERTScore (0.30 weight)**: Contextual embedding similarity, balancing strict matching with semantic equivalence

This multi-metric approach addressed the fundamental challenge in RAG evaluation: no single metric captures all dimensions of answer quality. The Cohere proprietary model marginally but consistently outperformed the open-source Mistral-7B alternative, particularly for marketing persona responses where clarity and accessibility were paramount.

The system processed **5,000+ queries per week**, with 89% of users reporting they found the information they needed on the first try.
