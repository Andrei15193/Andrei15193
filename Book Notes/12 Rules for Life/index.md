---
title: 12 Rules for Life
permalink: /Book Notes/12 Rules for Life
categories:
- Book Notes
---

<div class="image">
  <img alt="12 Rules for Life Book Covers" src="{{ '/assets/images/12%20Rules%20for%20Life.png' | relative_url }}">
  <div class="caption">Taken from Amazon.co.uk, <a target="_blank" href="https://www.amazon.co.uk/Beyond-Order-More-Rules-Life/dp/0241407621">Beyond Order: 12 More Rules for Life</a></div>
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
