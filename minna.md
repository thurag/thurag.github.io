---
layout: minna
title: Minna Kotoba
---
<div class="list-type3">
	{% assign minnas = site.minna || sort: 'chapter' %}
	<ul>
		{% for minna in minnas  %}
		<li>
			<a href="{{ minna.chapter | plus: 1 | prepend: site.baseurl }}">
			{{minna.chapter | plus: 1}}
			{{minna.title}}
			</a>
		</li>
		{% endfor %}   
	</ul>
</div>



