---
layout: casestudy
title: "Cost & Profitability Framework at $XXB+ Scale"
description: Building comprehensive P&L profitability solution to understand profit drivers across multi-billion dollar business
summary: Built first credible customer P&L with >100K SKU granularity, enabling millions in optimization through direct attribution and intelligent allocation
img: assets/img/casestudies/finance-as-product.png
importance: 5
category: Professional
metrics:
  - value: ">100K SKUs"
    label: "Product-Level Granularity"
  - value: "Customer P&L"
    label: "First Credible Attribution"
  - value: "Full P&L"
    label: "List→Net→Operating Margin"
---

## The Challenge

<div class="pull-quote float-right">
"Where do we make money, and why? Answering this question unlocked millions in optimization opportunities"
</div>

Building on the [Revenue Platform](/casestudies/the_xxb_revenue_platform/) that established the single source of truth for top-line metrics, the organization still lacked granular visibility into profit drivers. Leaders could see total revenue, but couldn't answer: "Which products are profitable? Which customers drive margins? Where should we invest?"

The challenge was unprecedented complexity: **>100,000 product SKUs**, thousands of customers, shared infrastructure costs, and indirect expenses that needed intelligent allocation across the entire business.

## My Approach: From Product P&L to Customer P&L

<div class="float-left-narrow">
    <div class="row">
        <div class="col-sm">
            {% include figure.liquid path="assets/img/casestudies/finance-as-product.png" class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
    </div>
    <div class="caption">
        The Finance-as-a-Product Model: From a single source of truth, my team built and delivered four fit-for-purpose analytics products
    </div>
</div>

I built a comprehensive P&L profitability solution in two phases:

**Phase 1: Granular Product P&L (>100K SKUs)**

First, I established robust infrastructure for product-level profitability at extreme granularity—over 100,000 SKUs. This required:
- Revenue attribution by product at SKU level
- Direct cost tracking (COGS, infrastructure compute costs)
- Shared cost pools with allocation methodologies
- Validation and reconciliation to company-level financials

**Phase 2: First Credible Customer P&L**

Building on the product foundation, I extended the framework to create the **first credible customer P&L**—a complete profit picture for every customer:

**Full P&L Structure:**
- **List Revenue** → Discounts → **Net Revenue**
- Direct Costs (infrastructure, compute per customer)
- Allocated Costs (shared pools, SG&A)
- Engineering Payroll (activity-based allocation)
- **Operating Margin** by customer

**The Attribution Challenge:**

This required solving complex allocation problems:

1. **Direct Attribution** (Ideal)
   - **Infrastructure costs**: Compute usage directly traced to customer workloads
   - **Product SKU costs**: Bill of materials and direct COGS

2. **Indirect Allocation** (Sophisticated Methodology Required)
   - **Shared infrastructure pools**: Allocated based on usage patterns
   - **SG&A expenses**: Allocated based on revenue or headcount
   - **Engineering payroll**: Activity-based allocation

**The Payroll Allocation Breakthrough:**

For engineering payroll—a massive cost driver—I leveraged a [company-wide time tracking system](/casestudies/time_tracking_app/) I had built years earlier. This system, which had been greenlit by Sundar Pichai and scaled across the organization, was still in use and provided the data foundation for activity-based payroll allocation.

By understanding what teams were working on (which products, which customers), we could allocate engineering costs with unprecedented accuracy—attributing payroll based on actual effort rather than crude proxies.

## The Outcome

Established the **first credible customer P&L** in the organization's history—a complete view from List Revenue → Net Revenue → Operating Margin for every customer, with the granularity to drill down to >100K product SKUs.

**Business Impact:**

- **Product Portfolio Optimization**: Identified underperforming SKUs and sunset decisions that improved margins
- **Customer Profitability Insights**: Revealed high-revenue customers that were unprofitable due to cost structure
- **Pricing Strategy**: Enabled data-driven pricing based on actual cost-to-serve, not just market positioning
- **Resource Allocation**: Directed engineering investment toward highest-margin opportunities
- **Contract Negotiations**: Armed sales teams with profitability data for enterprise deals

**Millions in optimization opportunities** surfaced through granular visibility:
- Renegotiated unprofitable customer contracts
- Sunset low-margin products with high infrastructure costs
- Optimized discount structures based on actual profitability impact

**Technical Achievement:**

The **full-circle story**: A time tracking system I built early in my Google career became, years later, the foundation for accurate payroll allocation in a multi-billion dollar P&L framework—demonstrating the long-term value of well-designed systems.

The Finance-as-a-Product model transformed how the organization consumed financial analytics—moving from one-size-fits-all reports to four specialized products tailored to different audiences and use cases, all built from the same trusted foundation. This framework became the "source of truth" for answering: **"Where do we make money, and why?"**
