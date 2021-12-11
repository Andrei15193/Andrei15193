---
title: Ideas
permalink: /Ideas
---

A collection of ideas and concepts that one day may materialize.

{% for post in site.posts %}
{% if post.categories.size == 1 and post.categories[0] == page.title %}
* <p class="margin-bottom-0"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></p>
  <p>{{ post.excerpt }}</p>
  <p class="post-timestamp">Posted on {{ post.date | date: '%A, %-d %B %Y' }}</p>
{% endif %}
{% endfor %}