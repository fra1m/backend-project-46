install:
	npm ci,
	npm init,
	npm link,

lint:
	npx eslint .

fix:
	npx eslint --fix .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watch

gendiff: 
	node gendiff.js -h

publish:
	npm publish --dry-run
