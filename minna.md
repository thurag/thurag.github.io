---
layout: minna
title: Minna Kotoba
---

{% assign minnas = site.minna || sort: 'chapter' %}
{% for minna in minnas  %}

<a href="{{ minna.chapter | prepend: site.baseurl }}">
{{minna.title}}
{{minna.chapter}}
</a>

{% endfor %}   