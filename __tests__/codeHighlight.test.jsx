// __tests__/codeHighlight.test.jsx

import Highlight from '../util/codeHighlight'
//  String formating is really important
//  – remember about newlines, quotes, trailing spaces
const snippet = `
(a) => a + 1;
`
const snippetF = Highlight(snippet)
const expectation = `
<span style='color:#665'>(</span>a<span style='color:#665'>)</span> <span style='color:#832'>=></span> a + 1<span style='color:#665'>;</span>
`
test('formated code snipped equals test sample', () => {
  expect(snippetF).toMatch(expectation);
});

const snippet2 = `
return // abc
`
const snippetF2 = Highlight(snippet2)
const expectation2 = `
<span style='color:#832'>return</span> <span style='color:#665'>// abc</span>
`
test('formated code snipped equals test sample (v2)', () => {
  expect(snippetF2).toMatch(expectation2);
});
