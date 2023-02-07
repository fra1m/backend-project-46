install:
	npm ci,
	npm init,
	npm link,

gendiff: 
	node gendiff.js -h

publish:
	npm publish --dry-run
