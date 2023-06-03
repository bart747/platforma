// __tests__/codeHighlight.test.jsx

import Highlight from "../util/codeHighlight";
//  String formatting is really important
//  – remember about newlines, quotes, trailing spaces
const snippet = "(a) => a + 1;";
const snippetF = Highlight(snippet);
const expectation =
  "<pre><code> <span class='text-gray-500'>(</span>a<span class='text-gray-500'>)</span> <span class='text-brand-maroon'>=></span> a + 1<span class='text-gray-500'>;</span>";
test("formatted code snipped equals test sample", () => {
  expect(snippetF).toMatch(expectation);
});

const snippet2 = "return // abc";
const snippetF2 = Highlight(snippet2);
const expectation2 =
  "<pre><code> <span class='text-brand-maroon'>return </span><span class='text-gray-500'>// abc</span> </code></pre>";
test("formatted code snipped equals test sample (v2)", () => {
  expect(snippetF2).toMatch(expectation2);
});
