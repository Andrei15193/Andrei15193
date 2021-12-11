---
title: Ideas
permalink: /Ideas
---

A collection of ideas and concepts that one day may materialize.

{% for post in site.posts %}
{% if post.categories.size == 1 and post.categories[0] == page.title %}
<hr>
### [{{ post.title }}]({{ post.url | relative_url }})

{% unless post.hide_excerpt %}{{ post.excerpt }}{% endunless %}

<p class="post-timestamp">Posted on {{ post.date | date: '%A, %-d %B %Y' }}</p>
{% endif %}
{% endfor %}