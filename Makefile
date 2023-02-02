install:
	npm ci

gendiff: 
	node gendiff.js -h

publish:
	npm publish --dry-run
