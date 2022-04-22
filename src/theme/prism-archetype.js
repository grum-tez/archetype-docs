(function (Prism) {

	Prism.languages.archetype = {
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
		'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*%\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
		'label': {
			pattern: /\B~\w+/,
			alias: 'function'
		},
    	'transfer-rule': {
    	  pattern: /transfer\s+(((?!to(\s+entry)?).)*)\s+to/,
    	  inside: {
    	    'builtin': {
    	      pattern: /\b(?:transfer|to|entry)\b/,
    	    },
    	    'constant': {
    	      pattern: /\b(?:now|balance|transferred|self|caller|sender|selfaddress|state|operations)\b/,
    	    }
    	  },
    	},
		'unkeyworded' : /%(?:.*)/,
    	'archetype': /\b(?:archetype)\b/,
    	'builtin': /\b(?:exec_lambda|opt_get|issome|left|right|some|none|isempty|length|put|get|transfer|call|emit)\b/,
    	'declaration': /\b(?:event|constant|archetype|enum|states|variable|asset|to big_map|record|as|initial|identified by|initialized by)\b/,
    	'entry': /\b(?:entry|transition|function|getter|view)\b/,
    	'section': /\b(?:state is|called by|sourced by|require|failif|effect|with effect|from|to|when|otherwise|shadow|postcondition|fails)\b/,
    	'verif': /\b(?:invariant|specification)\b/,
    	'type': /\b(?:contract|big_map|map|set|option|list|int|nat|tez|string|rational|bytes|key|key_hash|address|sapling|signature|date|duration|bool|operation|aggregate|partition|asset_view)\b/,
    	'constant': /\b(?:now|balance|transferred|self|caller|sender|selfaddress|state|operations)\b/,
		'control': /\b(?:assert|begin|end|do|done|else|return|before|for|if|in|match|in|forall|added|removed|exists|then|the|from|to|while|with|InvalidCondition|InvalidCaller|NotFound|NatAssign|SliceError|DivByZero|OutOfBound)\b/,
		'decl': /\b(?:var|let some)\b/,
		'boolean': /\b(?:false|true)\b/,
    	'logic': /\b(?:and|or|=|not|asr|land|lor|lsl|lsr|lxor)\b/,
    	'asset': /\b(?:count|sum|asc|desc|removeif|remove|update|contains|clear|select|sort|head|nth|add|put|addupdate)\b/,
		'access': /(?:\[|\])/,
    	'crypto': /\b(?:unpack|open_chest)\b/,
    	'arith': /\b(?:mod|abs|min|max)\b/,
		// Custom operators are allowed
		'function': /:=|\+=|\-=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*\b/,
		'punctuation': /[(){}|.,:;]|\b_\b/,
	};
}(Prism));
