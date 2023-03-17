install:
	npm ci

lint:
	npx eslint .

fix:
	npx eslint --fix .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --watchAll

publish:
	npm publish --dry-run

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage
