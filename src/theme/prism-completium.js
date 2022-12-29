(function (Prism) {

	Prism.languages.completium = {
		'comment': /\/\*[\s\S]*?\*\//,
		'string': [
			{
				pattern: /"(?:\\.|[^\\\r\n"])*"/,
				greedy: true
			},
			{
				pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
				greedy: true
			}
		],
		'identifier': /%[a-z]+/,
		'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*%\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
		'top' : /^((\$ )?completium-cli)|^((\$ )?npm)|^((\$ )?cd)|^(git)|^(opam)|^(make)|^(eval)|^(npx)/m,
		'first': /\b(?:create-react-app|call|deploy|init|generate account|accounts|clone|create project|mockup|generate|set binary path|switch mode|install|set mode|show mode|run|binding-ts|binding-dapp-ts)\b/,
		'checked': /\b(?:✔)\b/
	};
}(Prism));
