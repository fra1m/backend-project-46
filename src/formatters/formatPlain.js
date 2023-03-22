import _ from 'lodash';

const complexValue = (value) => (_.isObjectLike(value) === true )? '[complex value]' : (_.isString(value) )? `'${value}'` : value;
const deleteSpace = (arrLines) => arrLines.filter( (line) => line.length > 0).join('\n');


const formatPlain = (tree) => {
    
	const file = (arrPbj, path) => {
		const arrLines = arrPbj.map( (obj) => {
			const { 
				type, key, children, value, value1, value2 
			} = obj;

			switch (type) {
			case'inner':
				return file(children,`${path}${key}.`);
			case 'chanched' :
				return `Property '${path}${key}' was updated. From ${complexValue(value1)} to ${complexValue(value2)}`;
			case 'first':
				return `Property '${path}${key}' was removed`;
			case 'second':
				return `Property '${path}${key}' was added with value: ${ complexValue(value)}`;
			default:
				return '';

			}

		} );
        
		return arrLines;
	};
    
	return deleteSpace(_.flattenDeep(file(tree,'')));
};

export default formatPlain;