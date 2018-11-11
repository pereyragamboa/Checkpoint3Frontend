import React from 'react';

const Footer = (props) => (
	<footer class="page-footer purple darken-1">
		<div class="container">
			<div class="row">
				<div class="col l6 s12">
					<h5 class="white-text">A Chikorita Company</h5>
					<p class="grey-text text-lighten-4">Check our company details here.</p>
				</div>
				<div class="col l4 offset-l2 s12">
					<h5 class="white-text">Dirección</h5>
					<ul>
						<li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
						<li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
						<li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
						<li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer-copyright">
			<div class="container">
				© 2014 Copyright Text
				<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
			</div>
		</div>
	</footer>
)

export default Footer