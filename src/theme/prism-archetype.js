(function (Prism) {

	Prism.languages.archetype = {
		'comment': /\(\*[\s\S]*?\*\)/,
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
		'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*%\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
		'label': {
			pattern: /\B~\w+/,
			alias: 'function'
		},
		//'type_variable': {
		//	pattern: /\w+\s+([:])\s+\w+/,
		//	alias: 'inserted'
		//},
		// For the list of keywords and operators,
		// see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
        'archetype': /\b(?:archetype)\b/,
        'storage': /\b(?:constant|archetype|enum|states|variable|asset|record|as|initial|identified by|initialized by)\b/,
        'entry': /\b(?:entry|transition|function|getter|view)\b/,
        'section': /\b(?:called by|require|fail if|effect|with effect|from|to|when|otherwise|shadow|postcondition|fails)\b/,
        'verif': /\b(?:invariant|specification)\b/,
        'type': /\b(?:int|nat|tez|string|bytes|key|key_hash|address|sapling|signature|date|duration|bool|operation|event)\b/,
        'constant': /\b(?:now|balance|transferred|self|caller|sender|selfaddress|state|operations)\b/,
		'control': /\b(?:assert|begin|end|do|done|else|return|before|for|if|in|match|in|forall|added|removed|exists|then|the|from|to|while|with|InvalidCondition|InvalidCaller|NotFound|NatAssign|SliceError|DivByZero|OutOfBound)\b/,
		'decl': /\b(?:var|let some)\b/,
		'boolean': /\b(?:false|true)\b/,
        'builtin': /\b(?:exec_lambda|opt_get|issome|left|right|some|none|isempty|length|put|get|transfer|emit)\b/,
        'logic': /\b(?:and|or|=|not|asr|land|lor|lsl|lsr|lxor)\b/,
        'asset': /\b(?:count|removeif|remove|update|contains|clear|select|sort|head|nth|add|put|addupdate)\b/,
        'crypto': /\b(?:unpack|open_chest)\b/,
        'arith': /\b(?:mod|abs|min|max)\b/,
		// Custom operators are allowed
		'function': /:=|\+=|\-=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*\b/,
		'punctuation': /[(){}\[\]|.,:;]|\b_\b/
	};
}(Prism));
