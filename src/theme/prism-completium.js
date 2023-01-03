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
		'capture': /\b(-call|--init)/i,
		'top' : /^((\$ )?completium-cli)|^((\$ )?npm)|^((\$ )?cd)|^(git)|^(opam)|^(make)|^(eval)|^(npx)|^(\$ )?docker|^((\$ )?cat)/m,
		'first': /\b(?:create-react-app|show binary path|show endpoint|switch endpoint|switch account|set endpoint|start sandbox|stop sandbox|call|deploy|help|init|generate account as|accounts|clone|create project|mockup|generate|set binary path|switch mode|install|set mode|show mode|run|binding-ts|binding-dapp-ts|container ls|import faucet|transfer|remove endpoint|import privatekey|show account|set account|remove account|originate|show entries|show storage|show contract)\b/,
		'checked': /\b(?:✔)\b/
	};
}(Prism));
