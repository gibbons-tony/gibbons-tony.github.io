---
layout: post
title: "Crucible: A Self-Learning Tool I Built to Build Everything Else"
date: 2026-03-14
description: I built an AI development tool with specialized agents and a knowledge graph that gets smarter as you use it. Then I used it to build everything else. Here's the story.
tags: [AI, Multi-Agent Systems, Software Engineering, LLM, Open Source]
categories: [Technical Leadership, Innovation]
featured: true
giscus_comments: true
related_posts: true
thumbnail: assets/img/blog/1m thumb.png
toc:
  sidebar: left
---

## What I built and why

A couple months ago I went deep on agentic AI. I'd been using Claude Code for everything — it's genuinely powerful — but I kept hitting the same wall on bigger projects. Context gets lost. Sessions start from scratch. The AI re-discovers things it figured out yesterday. Quality is inconsistent.

I started thinking about why. Not why the AI is bad — it's not — but why the results degrade at scale. And the answer was pretty obvious once I framed it right: **the AI was missing the same structure that makes human engineering teams effective.**

In a real software organization, you don't have one person doing everything. You have specialists — requirements, design, implementation, testing, security, deployment — each with their own expertise, communicating through structured handoffs. There are quality gates. There's institutional knowledge. Decisions are documented and traceable.

So I built that. Over a couple of intense weeks, I built [Crucible](https://crucible.emberagenticlabs.com) — a structured development environment that gives Claude Code specialized agents, a knowledge graph, task management, and quality gates, all integrated into VS Code.

---

## The problem at scale

AI coding tools are great at small tasks. Write a function, refactor a class, fix a bug — they handle it well. But try to build something with multiple components, shared architecture decisions, and requirements that need to stay consistent across files, and things start to fall apart.

The issue isn't intelligence. It's context. On larger projects, the AI doesn't have the right information at the right time. It makes decisions that contradict earlier ones. It duplicates work. It generates code that technically runs but doesn't fit into the bigger picture. If you've used AI tools on anything beyond a single file, you've probably felt this.

---

## The approach

Crucible's core idea is simple: give the AI the same organizational structure that makes the best human teams work.

**Specialized agents working in parallel.** Instead of one AI doing everything, Crucible has agents for requirements, design, implementation, testing, security, DevOps, and more. Each one has its own context, its own tools, and its own area of expertise. They work on different tasks simultaneously and communicate through structured handoffs — not one long conversation thread.

**A knowledge graph that grows as you build.** Every requirement, design decision, piece of architecture, and code artifact gets indexed and made searchable. When an agent starts a new task, it can query what's already been decided, what's been built, and why. Prior work informs future decisions. The system doesn't start from scratch — it builds on what it knows.

**Process without constraint.** State machines guide the workflow — research before creation, validation before handoff — but the LLM works freely within each phase. Full tool access, free-form thinking. The structure ensures nothing gets skipped. The AI figures out the actual work.

---

## What's interesting about it

The thing that surprised me most was the compounding effect. The more you use Crucible, the better it gets. The knowledge graph grows. Context improves. Agents make better decisions because they have access to the full history of the project — not just what fits in a context window.

I used it to build significantly more complex systems on top of itself. The patterns that emerged — stateful goal-seeking behavior through multi-turn interactions, knowledge graph data capture and relationship mapping, structured handoff protocols — these aren't specific to software development. They're general patterns for how AI agents can work on complex problems across many domains.

That realization is what led to [Ember Agentic Labs](https://emberagenticlabs.com) — the idea that these agentic frameworks can be applied to finance, knowledge management, compliance, scientific research, and other areas where structured AI can create real value.

---

## Where it is today

**Crucible Alpha** is open source and available now. It's a v1 built fast — functional and genuinely useful, but rough in places. It's a best-effort system: the agents do a good job following the workflow, but you need to actively guide them. Remind them to create tasks. Ask them to search the knowledge base. Treat each agent like a capable but new team member who needs direction.

It runs in VS Code with Claude Code. You work with the agents through a chat interface, create and resolve tasks, and watch the knowledge base grow as you build. It's the tip of the iceberg of what's possible.

**Crucible Pro** is in active development — multi-LLM support (use any provider), adaptive model selection for speed/cost/quality, enforced quality gates, agent swarming with auto-scaling pools, and self-improving system capabilities. Alpha is the foundation. Pro is where it's going.

---

## Come build with us

Crucible is open source under the MIT license. I'm genuinely excited about where this is heading and I'd love for others to explore it, break it, improve it, and take it in directions I haven't thought of.

- **GitHub:** [github.com/ember-agentic/crucible](https://github.com/ember-agentic/crucible)
- **Download:** [Crucible Alpha for macOS](https://github.com/ember-agentic/crucible/releases/tag/v0.1.0)
- **Website:** [crucible.emberagenticlabs.com](https://crucible.emberagenticlabs.com)
- **Contact:** [tony@emberagenticlabs.com](mailto:tony@emberagenticlabs.com)

This is early. There's a lot to build. If any of this resonates with you, come join the fun.

---

*Related posts:*
- [Creating Pull vs. Pushing Harder: A Leadership Philosophy](/blog/2026/creating-pull-not-push/)
- [The AI-Driven Finance Revolution](/blog/2026/ai-driven-finance-revolution/)
- [The Cross-Disciplinary Advantage](/blog/2026/cross-disciplinary-advantage/)
