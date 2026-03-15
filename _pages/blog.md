---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 6
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}
  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
{% endif %}

<br>

<!-- Blog Posts Grid -->
<div class="container">
  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for post in postlist %}
      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}
      {% assign year = post.date | date: "%Y" %}

      <div class="col mb-4">
        <a href="{{ post.url | relative_url }}" class="text-decoration-none">
          <div class="card h-100 hoverable">
            {% if post.thumbnail %}
            <img src="{{ post.thumbnail | relative_url }}" class="card-img-top" alt="{{ post.title }}" style="height: 200px; object-fit: cover;">
            {% endif %}
            <div class="card-body d-flex flex-column">
              {% if post.featured %}
              <div class="text-end mb-2">
                <i class="fa-solid fa-thumbtack fa-sm text-muted"></i>
              </div>
              {% endif %}
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-text flex-grow-1">{{ post.description }}</p>

              <div class="mt-auto">
                <p class="post-meta text-muted mb-2">
                  <i class="fa-regular fa-clock"></i> {{ read_time }} min read &nbsp; &middot; &nbsp;
                  <i class="fa-regular fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}
                </p>

                {% if post.tags.size > 0 or post.categories.size > 0 %}
                <p class="post-tags small">
                  {% for category in post.categories %}
                    <span class="badge bg-secondary me-1">{{ category }}</span>
                  {% endfor %}
                  {% for tag in post.tags %}
                    <span class="badge bg-light text-dark me-1">#{{ tag }}</span>
                  {% endfor %}
                </p>
                {% endif %}
              </div>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}

</div>