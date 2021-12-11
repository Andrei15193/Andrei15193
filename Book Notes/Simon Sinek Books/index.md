---
title: Simon Sinek Books
permalink: /Book Notes/Simon Sinek Books
categories:
- Book Notes
---

<div class="image">
  <img alt="Simon Sinek Books Covers" src="{{ '/assets/images/Simon%20Sinek%20Books.png' | relative_url }}">
</div>

Notes
-----

{% for post in site.posts %}
{% if post.categories.size == 2 and post.categories[0] == page.categories[0] and post.categories[1] == page.title %}
* <p class="margin-bottom-0"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></p>
  <p class="post-timestamp">Posted on {{ post.date | date: '%A, %-d %B %Y' }}</p>
{% endif %}
{% endfor %}