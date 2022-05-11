var xslt4node = require('xslt4node');

   /* var config = {
            xsltPath: 'discount.xsl',
            sourcePath: 'order.xml',
            result: 'result.xml',
            props: {
                indent: 'yes'
            }
        };
        xslt4node.transformSync(config);
*/
function transformxlst(config){
const result = xslt4node.transformSync(config);
    return result;
}

module.exports = transformxlst;