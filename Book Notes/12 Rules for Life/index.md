---
title: "12 Rules for Life"
permalink: "/Book Notes/12 Rules for Life"
categories:
- "Book Notes"
---

<div class="image">
  <img alt="12 Rules for Life Book Covers" src="/{{ site.github.repository_name }}/assets/images/12%20Rules%20for%20Life.png">
  <div class="caption">Taken from Amazon.co.uk, <a target="_blank" href="https://www.amazon.co.uk/Beyond-Order-More-Rules-Life/dp/0241407621">Beyond Order: 12 More Rules for Life</a></div>
</div>

Notes
-----

{% for post in site.posts %}
{% if post.categories.size == 2 and post.categories[0] == "Book Notes" and post.categories[1] == "12 Rules for Life" %}
* <p class="margin-bottom-0"><a href="/{{ site.github.repository_name }}{{ post.url }}">{{ post.title }}</a></p>
  <p class="post-timestamp">Posted on {{ post.date | date: "%A, %-d %B %Y" }}</p>
{% endif %}
{% endfor %}
