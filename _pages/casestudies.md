---
layout: page
title: case studies
permalink: /casestudies/
description: Real-world business impact across billion-dollar platforms, strategic analytics, and organizational scaling.
nav: true
nav_order: 2
horizontal: false
---

## Professional Case Studies

These case studies showcase strategic leadership and technical excellence from my work at Google and Cisco, delivering measurable business impact at scale.

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign professional_cases = site.casestudies | where: "category", "Professional" | sort: "importance" %}
    {% for casestudy in professional_cases %}
      {% include casestudies.liquid %}
    {% endfor %}
  </div>
</div>

---

## Academic Projects: UC Berkeley MIDS

These case studies highlight business problem-solving and strategic thinking from my UC Berkeley Master of Information and Data Science program, demonstrating how advanced analytics and AI techniques solve real-world business challenges.

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign mids_cases = site.casestudies | where: "category", "MIDS" | sort: "importance" %}
    {% for casestudy in mids_cases %}
      {% include casestudies.liquid %}
    {% endfor %}
  </div>
</div>

---

## The Architecture: Finance-as-a-Product

Across these projects, I developed a comprehensive "Finance-as-a-Product" model, delivering four distinct analytics products from a unified data foundation:

<div class="row mt-4">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/casestudies/finance-as-product.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The Finance-as-a-Product Model: From a single source of truth, my team built and delivered four fit-for-purpose analytics products
</div>

### 1. Core Financials & Reporting
PPL, Balance Sheet, Cash Flow, Variance Analysis, Departmental Budgets

### 2. SaaS & LTV Analytics
ARR/NRR, Gross/Net Churn, LTV:CAC, Cohort Analysis, Payback Periods

### 3. GTM & Revenue Operations
Bookings, Pipeline Coverage, Sales Rep Performance, Lead-to-Cash Funnel

### 4. Product & Growth Analytics
Usage-to-Revenue Drivers, Feature Adoption, PQL/MQL Funnels

This product-oriented approach transformed finance from a reactive reporting function into a proactive, strategic partner driving business growth.
