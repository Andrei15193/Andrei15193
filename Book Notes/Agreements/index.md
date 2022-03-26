---
title: Agreements
permalink: /Book Notes/Agreements
categories:
- Book Notes
---

<div class="image">
  <img alt="The 5th Agreement Cover" src="{{ '/assets/images/The%205th%20Agreement.png' | relative_url }}">
  <div class="caption">Taken from goodreads.com, <a target="_blank" href="https://www.goodreads.com/book/show/6979404-the-fifth-agreement">The Fifth Agreement: A Practical Guide to Self-Mastery</a></div>
</div>

Notes
-----
{% assign is_first = true %}
{% for post in site.posts %}
{% if post.categories.size == 2 and post.categories[0] == page.categories[0] and post.categories[1] == page.title %}
{% if is_first %}{% assign is_first = false %}{% else %}<hr>{% endif %}
### [{{ post.title }}]({{ post.url | relative_url }})

{% unless post.hide_excerpt %}{{ post.excerpt }}{% endunless %}

<p class="post-timestamp">Posted on {{ post.date | date: '%A, %-d %B %Y' }}</p>
{% endif %}
{% endfor %}